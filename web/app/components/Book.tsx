"use client";

import {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { playPageTurn } from "../lib/sound";
import { PageSoundToggle } from "./PageSoundToggle";
import styles from "./Book.module.css";

const FLIP_MS = 1100;          // duración del flip 3D
const WHEEL_THRESHOLD = 60;    // delta acumulado para disparar flip
const TOUCH_THRESHOLD = 60;    // distancia mínima de swipe en px
const DEBOUNCE_MS = 320;       // descanso post-flip

export function Book({ children }: { children: ReactNode }) {
  const pages = useMemo(() => Children.toArray(children), [children]);
  const total = pages.length;
  const [idx, setIdx] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const lockUntilRef = useRef(0);
  const wheelAccumRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const flipTo = useCallback(
    (target: number) => {
      const now = Date.now();
      if (now < lockUntilRef.current) return;
      if (target < 0 || target > total - 1) return;
      if (target === idx) return;

      lockUntilRef.current = now + FLIP_MS + DEBOUNCE_MS;
      setFlipping(true);
      setIdx(target);
      playPageTurn();

      window.setTimeout(() => {
        setFlipping(false);
      }, FLIP_MS);
    },
    [idx, total],
  );

  const next = useCallback(() => flipTo(idx + 1), [flipTo, idx]);
  const prev = useCallback(() => flipTo(idx - 1), [flipTo, idx]);

  // ============ keyboard ============
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          flipTo(0);
          break;
        case "End":
          e.preventDefault();
          flipTo(total - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, flipTo, total]);

  // ============ wheel ============
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // Si el cursor está sobre un elemento con scroll vertical interno, dejarlo scrollear
      const target = e.target as HTMLElement | null;
      const scroller = target?.closest("[data-page-content]") as HTMLElement | null;
      if (scroller) {
        const { scrollTop, scrollHeight, clientHeight } = scroller;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
        const atTop = scrollTop <= 0;
        if (e.deltaY > 0 && !atBottom) return; // scroll interno
        if (e.deltaY < 0 && !atTop) return;
      }

      e.preventDefault();
      wheelAccumRef.current += e.deltaY;
      if (wheelAccumRef.current > WHEEL_THRESHOLD) {
        wheelAccumRef.current = 0;
        next();
      } else if (wheelAccumRef.current < -WHEEL_THRESHOLD) {
        wheelAccumRef.current = 0;
        prev();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  // ============ touch ============
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      touchStartYRef.current = e.touches[0].clientY;
      touchStartXRef.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartYRef.current === null || touchStartXRef.current === null) return;
      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const dy = touchStartYRef.current - endY;
      const dx = touchStartXRef.current - endX;
      touchStartYRef.current = null;
      touchStartXRef.current = null;

      // si el touch ocurrió dentro de un scroller interno y éste no está en el borde, no flipear
      const target = e.target as HTMLElement | null;
      const scroller = target?.closest("[data-page-content]") as HTMLElement | null;
      if (scroller) {
        const { scrollTop, scrollHeight, clientHeight } = scroller;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
        const atTop = scrollTop <= 0;
        if (dy > 0 && !atBottom) return;
        if (dy < 0 && !atTop) return;
      }

      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > TOUCH_THRESHOLD) {
        if (dy > 0) next();
        else prev();
      } else if (Math.abs(dx) > TOUCH_THRESHOLD) {
        if (dx > 0) next(); // swipe izq → siguiente página (como pasar hoja)
        else prev();
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  const roman = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];
  const currentRoman = roman[idx] ?? String(idx + 1);
  const totalRoman = roman[total - 1] ?? String(total);

  return (
    <div className={styles.book} role="document" aria-roledescription="libro">
      <div className={styles.stage}>
        {pages.map((page, i) => {
          const isPast = i < idx;
          const isCurrent = i === idx;
          const className = [
            styles.page,
            isPast ? styles.past : "",
            isCurrent ? styles.current : "",
            !isPast && !isCurrent ? styles.future : "",
          ].filter(Boolean).join(" ");

          return (
            <div
              key={i}
              className={className}
              aria-hidden={!isCurrent}
              style={{ zIndex: total - i }}
            >
              <div className={styles.pageContent} data-page-content tabIndex={isCurrent ? 0 : -1}>
                {page}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.chrome}>
        <div className={styles.chromeInner}>
          <button
            type="button"
            className={styles.navButton}
            onClick={prev}
            disabled={idx === 0 || flipping}
            aria-label="Página anterior"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <span className={styles.indicator}>
            <span className={styles.indicatorCurrent}>{currentRoman}</span>
            <span className={styles.indicatorSep}>·</span>
            <span className={styles.indicatorTotal}>{totalRoman}</span>
          </span>

          <button
            type="button"
            className={styles.navButton}
            onClick={next}
            disabled={idx === total - 1 || flipping}
            aria-label="Página siguiente"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <PageSoundToggle />
        </div>
      </div>
    </div>
  );
}
