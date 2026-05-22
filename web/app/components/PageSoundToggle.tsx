"use client";

import { useEffect, useState } from "react";
import { isSoundEnabled, setSoundEnabled } from "../lib/sound";
import styles from "./PageSoundToggle.module.css";

export function PageSoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setEnabled(isSoundEnabled());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    setSoundEnabled(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Silenciar paso de hoja" : "Activar paso de hoja"}
      title={enabled ? "Silenciar paso de hoja" : "Activar paso de hoja"}
    >
      {enabled ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4z" />
          <path d="M15.5 8.5a5 5 0 010 7" />
          <path d="M19 5a9 9 0 010 14" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4z" />
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </svg>
      )}
      <span className={styles.label}>{enabled ? "Sonido" : "Silencio"}</span>
    </button>
  );
}
