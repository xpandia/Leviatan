import { Book } from "./components/Book";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Book>
      {/* ============ Página 1 — Frontispicio ============ */}
      <div className={styles.leaf}>
        <header className={styles.folio}>
          <span className={styles.folioLeft}>Leviatán · MMXXVI</span>
          <span className={styles.folioRight}>xpandia · Cali</span>
        </header>

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

        <p className={styles.hint} aria-hidden="true">
          Avanza con la rueda, las flechas o un gesto. <span className={styles.hintArrow}>↓</span>
        </p>
      </div>

      {/* ============ Página 2 — Capítulo I ============ */}
      <div className={styles.leaf}>
        <header className={styles.folio}>
          <span className={styles.folioLeft}>Capítulo I · El Pacto</span>
          <span className={styles.folioRight}>Leviatán</span>
        </header>

        <section className={styles.chapterPage} aria-labelledby="cap1">
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
      </div>

      {/* ============ Página 3 — Capítulo II ============ */}
      <div className={styles.leaf}>
        <header className={styles.folio}>
          <span className={styles.folioLeft}>Capítulo II · Las cuatro caras</span>
          <span className={styles.folioRight}>Leviatán</span>
        </header>

        <section className={styles.chapterPage} aria-labelledby="cap2">
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
      </div>

      {/* ============ Página 4 — Capítulo III ============ */}
      <div className={styles.leaf}>
        <header className={styles.folio}>
          <span className={styles.folioLeft}>Capítulo III · Las medidas</span>
          <span className={styles.folioRight}>Leviatán</span>
        </header>

        <section className={styles.chapterPage} aria-labelledby="cap3">
          <header className={styles.chapterHead}>
            <span className={styles.chapterNumber}>Capítulo III</span>
            <h2 id="cap3" className={styles.chapterTitle}>Las medidas del cuerpo</h2>
            <p className={styles.chapterSubtitle}>de qué se mira cuando se mira a una institución.</p>
          </header>

          <div className={styles.prose}>
            <p className={styles.opening}>
              Un cuerpo institucional no se observa con encuestas anuales: se mide en tiempo real,
              igual que un pulso. Leviatán adopta las cinco dimensiones heredadas del <em>Trust Index</em>
              de Great Place to Work —<span className={styles.accent}>credibilidad, respeto, equidad,
              orgullo y camaradería</span>— y les añade las métricas duras que toda universidad ya
              conoce. La diferencia es que las mira <em>juntas</em>.
            </p>
          </div>

          <ol className={styles.measures}>
            <li>
              <span className={styles.measureNumber}>I</span>
              <div>
                <h4>Confianza percibida</h4>
                <p>las cinco dimensiones del Trust Index, medidas continuamente, no anualmente.</p>
              </div>
            </li>
            <li>
              <span className={styles.measureNumber}>II</span>
              <div>
                <h4>Valor agregado por cohorte</h4>
                <p>Saber Pro contra el perfil de entrada, no contra el promedio nacional.</p>
              </div>
            </li>
            <li>
              <span className={styles.measureNumber}>III</span>
              <div>
                <h4>Equidad efectiva</h4>
                <p>resultados desagregados por estrato, región y género; ninguna brecha invisible.</p>
              </div>
            </li>
            <li>
              <span className={styles.measureNumber}>IV</span>
              <div>
                <h4>Deserción atribuible</h4>
                <p>distinguir la deserción académica de la atribuible a soledad, ansiedad o costo.</p>
              </div>
            </li>
            <li>
              <span className={styles.measureNumber}>V</span>
              <div>
                <h4>Trayectoria post-grado</h4>
                <p>empleo, sentido y salud del egresado: el aprendizaje sobrevive al campus.</p>
              </div>
            </li>
          </ol>

          <p className={styles.afterList}>Ninguna métrica se mira sola.</p>
        </section>
      </div>

      {/* ============ Página 5 — Capítulo IV ============ */}
      <div className={styles.leaf}>
        <header className={styles.folio}>
          <span className={styles.folioLeft}>Capítulo IV · Las líneas rojas</span>
          <span className={styles.folioRight}>Leviatán</span>
        </header>

        <section className={styles.chapterPage} aria-labelledby="cap4">
          <header className={styles.chapterHead}>
            <span className={styles.chapterNumber}>Capítulo IV</span>
            <h2 id="cap4" className={styles.chapterTitle}>Las líneas rojas</h2>
            <p className={styles.chapterSubtitle}>de lo que Leviatán no es, y no será.</p>
          </header>

          <div className={styles.prose}>
            <p className={styles.opening}>
              Tres siglos de lecturas del Leviatán de Hobbes corrigieron lo que el libro original
              tenía de autoritario. Locke aportó la <em>revocabilidad</em> del pacto, Rousseau la
              <em> participación</em> de la voluntad común, Rawls la <em>justicia</em> para los menos
              aventajados. Esa corrección está incrustada en el código de Leviatán como límites que
              no se cruzan.
            </p>
          </div>

          <ul className={styles.redlines}>
            <li>
              <h4>No diagnostica salud mental.</h4>
              <p>Detecta señales, conecta con humanos preparados, acompaña hasta que la persona habla con alguien.</p>
            </li>
            <li>
              <h4>No reemplaza al docente.</h4>
              <p>Le devuelve tiempo y le amplifica la voz. La calificación y la mirada son humanas.</p>
            </li>
            <li>
              <h4>No vigila.</h4>
              <p>La transparencia es bidireccional: si la institución observa, el miembro también ve qué se sabe de él.</p>
            </li>
            <li>
              <h4>No comparte.</h4>
              <p>Los datos del cuerpo no fluyen a calificación, admisión ni empleabilidad. Esa pared es la primera regla del pacto.</p>
            </li>
            <li>
              <h4>No maquilla.</h4>
              <p>Si una práctica institucional daña, el sistema la nombra. El cuidado de verdad confronta; no escenifica.</p>
            </li>
          </ul>
        </section>
      </div>

      {/* ============ Página 6 — Colofón ============ */}
      <div className={styles.leaf}>
        <header className={styles.folio}>
          <span className={styles.folioLeft}>Colofón</span>
          <span className={styles.folioRight}>xpandia · MMXXVI</span>
        </header>

        <section className={styles.colophonPage} aria-labelledby="colophon">
          <div className={styles.ornamentLarge} aria-hidden="true">⁂</div>
          <h2 id="colophon" className={styles.colophonTitle}>Colofón</h2>
          <p className={styles.colophonProse}>
            Compuesto en EB Garamond e Inter, sobre papel digital blanco.
            <br />
            Dirigido por la filosofía de Thomas Hobbes <span className={styles.smallCaps}>MDCLI</span>
            <br />
            y la disciplina de Jonathan Ive.
          </p>
          <p className={styles.colophonImprint}>Cali, Colombia · MMXXVI</p>
          <p className={styles.colophonVersion}>xpandia · v 0.4 · sandbox</p>
        </section>
      </div>
    </Book>
  );
}
