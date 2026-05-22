import { Wordmark } from "./components/Wordmark";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Wordmark size="md" />
        <nav className={styles.nav}>
          <span>Cali · Colombia</span>
        </nav>
      </header>

      <main className={styles.main}>
        <span className={styles.eyebrow}>Próximamente</span>
        <h1 className={styles.headline}>
          La universidad <em>es un cuerpo vivo</em>.
        </h1>
        <p className={styles.sub}>
          Leviatán es un sistema de IA agéntica que reconoce, acompaña y representa a cada miembro
          de la universidad — estudiantes, docentes, comunidad — para que la institución entera se
          vuelva uno de los mejores lugares del mundo para estudiar y trabajar.
        </p>
        <blockquote className={styles.cite}>
          “Non est potestas Super Terram quae Comparetur ei.”
          <br />— Job 41:24, frontispicio del Leviatán, 1651
        </blockquote>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Leviatán · xpandia</span>
        <span>v0.1 · sandbox</span>
      </footer>
    </div>
  );
}
