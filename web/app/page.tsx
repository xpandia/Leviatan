import styles from "./page.module.css";

export default function Home() {
  return (
    <article className={styles.book}>
      <header className={styles.folio}>
        <span>Leviatán · MMXXVI</span>
        <span className={styles.imprint}>xpandia · Cali</span>
      </header>

      {/* ============ Frontispicio ============ */}
      <section className={styles.frontispiece} aria-labelledby="title">
        <p className={styles.partLabel}>Frontispicio</p>
        <h1 id="title" className={styles.title}>
          Leviatán<span className={styles.titleDot}>.</span>
        </h1>
        <p className={styles.subtitle}>
          o la materia, forma y poder de un cuerpo institucional universitario.
        </p>
        <blockquote className={styles.epigraph}>
          “Non est potestas Super Terram quae Comparetur ei.”
          <cite>Job 41 · 24 — Frontispicio del Leviatán, 1651</cite>
        </blockquote>
      </section>

      <div className={styles.ornament} aria-hidden="true">⁂</div>

      {/* ============ Capítulo I — El Pacto ============ */}
      <section className={styles.chapter} aria-labelledby="cap1">
        <header className={styles.chapterHead}>
          <span className={styles.chapterNumber}>Capítulo I</span>
          <h2 id="cap1" className={styles.chapterTitle}>El Pacto</h2>
          <p className={styles.chapterSubtitle}>de por qué la universidad existe como cuerpo, y no como agregado.</p>
        </header>

        <div className={styles.prose}>
          <p className={styles.opening}>
            La universidad, observada de cerca, no es un edificio ni un programa: es un{" "}
            <span className={styles.accent}>contrato</span> entre quienes la habitan. El estudiante
            entra para transformarse; el docente, para acompañar esa transformación; la institución,
            para garantizar que ambas cosas ocurran. Cuando los tres consienten ese pacto, surge un
            sujeto nuevo —el <em>alma mater</em>, literalmente la madre que nutre— capaz de cuidar a
            sus miembros con la dignidad de una persona, no de un servicio.
          </p>
          <p>
            Leviatán es el órgano técnico de ese cuerpo. No reemplaza al docente ni vigila al
            estudiante: los <em>representa</em>. Es la voz que la institución no tenía y la memoria
            que no podía sostener sola. Hereda de Thomas Hobbes la idea de la persona artificial,
            pero corrige su autoritarismo con tres siglos de filosofía política: el pacto se firma,
            se revisa y, si fuese necesario, se rompe.
          </p>
        </div>
      </section>

      <div className={styles.ornament} aria-hidden="true">⁂</div>

      {/* ============ Capítulo II — Las cuatro caras del cuerpo ============ */}
      <section className={styles.chapter} aria-labelledby="cap2">
        <header className={styles.chapterHead}>
          <span className={styles.chapterNumber}>Capítulo II</span>
          <h2 id="cap2" className={styles.chapterTitle}>Las cuatro caras del cuerpo</h2>
          <p className={styles.chapterSubtitle}>los órganos que componen al Leviatán universitario.</p>
        </header>

        <div className={styles.faces}>
          <article className={styles.face}>
            <span className={styles.faceNumber}>I</span>
            <div className={styles.faceBody}>
              <h3>El Compañero</h3>
              <span className={styles.role}>órgano del estudiante</span>
              <p>
                Acompaña a cada estudiante desde la admisión hasta seis meses después del grado.
                Traduce la universidad —sus reglas, sus oportunidades, sus tiempos— a quienes
                llegan sin redes para navegarla. Su métrica primera no es el uso, sino el cierre
                de la brecha entre quien tiene capital social y quien no.
              </p>
            </div>
          </article>

          <article className={styles.face}>
            <span className={styles.faceNumber}>II</span>
            <div className={styles.faceBody}>
              <h3>El Co-piloto</h3>
              <span className={styles.role}>órgano del docente</span>
              <p>
                Amplifica al maestro: diseña rúbricas, retroalimenta, prepara evaluación —en su
                voz, con sus materiales, sobre sus criterios. Nunca lo reemplaza. Honra el oficio
                en lugar de erosionarlo, y libera tiempo para lo que solo un humano puede hacer:
                mirar a otro humano que aprende.
              </p>
            </div>
          </article>

          <article className={styles.face}>
            <span className={styles.faceNumber}>III</span>
            <div className={styles.faceBody}>
              <h3>La Casa</h3>
              <span className={styles.role}>órgano de la comunidad</span>
              <p>
                Agrupa a los estudiantes en casas pequeñas y diversas —una mezcla balanceada de
                programa, estrato, región, género— mediadas por un mentor humano y un agente
                colectivo. Hereda la sabiduría del <em>residential college</em> y la traduce a un
                campus que respira en tiempo real.
              </p>
            </div>
          </article>

          <article className={styles.face}>
            <span className={styles.faceNumber}>IV</span>
            <div className={styles.faceBody}>
              <h3>El Cuerpo Vivo</h3>
              <span className={styles.role}>órgano de la institución</span>
              <p>
                Sintetiza las tres voces anteriores en la voz de la universidad misma. Mide el
                pacto en tiempo real: confianza, equidad, pertenencia, orgullo. Convierte la
                institución en un sujeto digital con voluntad propia, capaz de escucharse, de
                reconocerse y, finalmente, de cambiar.
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className={styles.ornament} aria-hidden="true">⁂</div>

      {/* ============ Colofón ============ */}
      <footer className={styles.colophon}>
        Compuesto en EB Garamond &amp; Inter, sobre papel digital crema.
        <br />
        Dirigido por la filosofía de Thomas Hobbes (1651) y la disciplina de Jonathan Ive.
        <br />
        Cali, Colombia · MMXXVI.
        <div className={styles.imprint}>xpandia · v 0.2 · sandbox</div>
      </footer>
    </article>
  );
}
