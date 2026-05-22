/**
 * Sound module — sintetiza un "page turn" sutil con Web Audio API.
 * Sin assets externos: white noise filtrado con envelope exponencial.
 */

const STORAGE_KEY = "leviatan.sound";
const EVENT_NAME = "leviatan:sound-toggle";

let ctx: AudioContext | null = null;
let noiseBuffer: AudioBuffer | null = null;
let lastPlayedAt = 0;
const MIN_INTERVAL_MS = 240; // evita disparos consecutivos

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") {
    void ctx.resume();
  }
  return ctx;
}

function getNoiseBuffer(audio: AudioContext): AudioBuffer {
  if (noiseBuffer) return noiseBuffer;
  const seconds = 0.7;
  const length = Math.floor(audio.sampleRate * seconds);
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    // ruido marrón aproximado: integración de white noise → más bajos, suave
    const white = Math.random() * 2 - 1;
    data[i] = (data[i - 1] || 0) * 0.96 + white * 0.04;
  }
  noiseBuffer = buffer;
  return buffer;
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "on";
}

export function setSoundEnabled(value: boolean): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value ? "on" : "off");
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
  if (value) {
    // primer click del usuario: warm-up del AudioContext
    getCtx();
  }
}

export function subscribeSoundToggle(cb: (enabled: boolean) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = (e: Event) => cb((e as CustomEvent<boolean>).detail);
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}

export function playPageTurn(): void {
  if (!isSoundEnabled()) return;
  const now = Date.now();
  if (now - lastPlayedAt < MIN_INTERVAL_MS) return;
  lastPlayedAt = now;

  const audio = getCtx();
  if (!audio) return;

  const buffer = getNoiseBuffer(audio);
  const source = audio.createBufferSource();
  source.buffer = buffer;

  // filtro band-pass barrido (papel se desliza)
  const bandpass = audio.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.Q.setValueAtTime(0.9, audio.currentTime);
  bandpass.frequency.setValueAtTime(1800, audio.currentTime);
  bandpass.frequency.exponentialRampToValueAtTime(380, audio.currentTime + 0.45);

  // highpass para limpiar rumble
  const highpass = audio.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.setValueAtTime(220, audio.currentTime);

  // envelope: ataque rápido, decay exponencial
  const gain = audio.createGain();
  const peak = 0.16; // suave
  gain.gain.setValueAtTime(0, audio.currentTime);
  gain.gain.linearRampToValueAtTime(peak, audio.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.55);

  source.connect(highpass);
  highpass.connect(bandpass);
  bandpass.connect(gain);
  gain.connect(audio.destination);

  source.start(audio.currentTime);
  source.stop(audio.currentTime + 0.6);
}
