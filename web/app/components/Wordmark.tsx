import type { ElementType } from "react";
import styles from "./Wordmark.module.css";

type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = {
  sm: 24,
  md: 40,
  lg: 72,
  xl: 120,
};

export function Wordmark({ size = "md", as: Tag = "span" as ElementType }: { size?: Size; as?: ElementType }) {
  const fontSize = sizeMap[size];
  return (
    <Tag
      className={styles.wordmark}
      style={{ fontSize: `${fontSize}px`, letterSpacing: `${-fontSize * 0.018}px` }}
      aria-label="Leviatán"
    >
      Leviatán<span className={styles.dot} aria-hidden="true">.</span>
    </Tag>
  );
}
