"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { playPageTurn } from "../lib/sound";
import styles from "./Chapter.module.css";

type Props = {
  children: ReactNode;
  /** si true, dispara el sonido al entrar en vista */
  withSound?: boolean;
  /** className opcional para overrides */
  className?: string;
};

export function Chapter({ children, withSound = true, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const playedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (withSound && !playedRef.current) {
              playedRef.current = true;
              playPageTurn();
            }
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [withSound]);

  return (
    <div
      ref={ref}
      className={[styles.chapter, visible ? styles.visible : "", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
