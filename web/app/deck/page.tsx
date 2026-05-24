import type { Metadata } from "next";
import { Book } from "../components/Book";
import styles from "./deck.module.css";

export const metadata: Metadata = {
  title: "Deck — Para Esteban Piedrahita",
  description: "Una propuesta más grande que un producto: el Pacto.",
};

export default function Deck() {
  return (
    <Book>
      {/* ============ 01 — Apertura ============ */}
      <div className={`${styles.slide} ${styles.wordmarkSlide}`}>
        <h1 className={styles.wordmark}>
          Leviatán<span className={styles.wordmarkDot}>.</span>
        </h1>
        <p className={styles.wordmarkSub}>Cali · MMXXVI</p>
      </div>

      {/* ============ 02 — ICESI ya es número uno ============ */}
      <div className={styles.slide}>
        <p className={styles.eyebrow}>Times Higher Education</p>
        <h2 className={styles.headline}>
          ICESI es <em>la mejor universidad</em> de Colombia.
        </h2>
        <p className={styles.foot}>ranking más reciente.</p>
      </div>

      {/* ============ 03 — Falta la otra mitad ============ */}
      <div className={styles.slide}>
        <h2 className={styles.headlineItalic}>
          Falta la otra mitad<span className={styles.accent}>.</span>
        </h2>
      </div>

      {/* ============ 04 — Lo que ICESI ya construyó ============ */}
      <div className={styles.slide}>
        <p className={styles.eyebrow}>Decanatura de Innovación Educativa · desde 2023</p>
        <h2 className={styles.headline}>
          Lo que <em>ya construiste</em>.
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}><strong>GECU</strong><em>diseño curricular, premio CIDESCO</em></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}><strong>SAMAN</strong><em>rutas de aprendizaje personalizadas</em></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}><strong>EVA + AVAC·IA</strong><em>asistente de diseño curricular</em></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}><strong>Capacidad IA institucional</strong><em>anunciada junio 2025</em></span>
          </li>
        </ul>
        <p className={styles.foot}>No vengo a reemplazar nada de esto.</p>
      </div>

      {/* ============ 05 — El vacío que ningún sistema resuelve ============ */}
      <div className={styles.slide}>
        <p className={styles.eyebrow}>Lo que aún no existe en Colombia</p>
        <h2 className={styles.headlineItalic}>
          El <span className={styles.accent}>cuerpo</span> institucional.
        </h2>
        <p className={styles.sub}>
          Estudiantes. Docentes. Egresados. Comunidad.<br />
          Medidos. Sostenidos. Representados.
        </p>
      </div>

      {/* ============ 06 — El Pacto (con imagen Hobbes) ============ */}
      <div className={`${styles.slide} ${styles.slideImage}`}>
        <div className={styles.imageBg} style={{ backgroundImage: "url(/og-leviatan.png)" }} aria-hidden="true" />
        <div className={styles.imageOverlay}>
          <p className={styles.eyebrow}>Frontispicio del Leviatán · 1651</p>
          <h2 className={styles.headlineItalic}>
            El Pacto<span className={styles.accent}>.</span>
          </h2>
          <p className={styles.sub}>
            Muchos cuerpos consienten en delegar parte de su voluntad a una persona artificial que los protege y los representa.
          </p>
        </div>
      </div>

      {/* ============ 07 — Cuatro órganos. Un solo cuerpo ============ */}
      <div className={styles.slide}>
        <h2 className={styles.headline}>
          Cuatro órganos. <em>Un solo cuerpo</em>.
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>I</span>
            <span className={styles.listLabel}><strong>Casa</strong><em>pertenencia mediada</em></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>II</span>
            <span className={styles.listLabel}><strong>Red Viva</strong><em>egresados como cuerpo activo</em></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>III</span>
            <span className={styles.listLabel}><strong>Tejido de Cuidado</strong><em>red humana con IA en triage</em></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>IV</span>
            <span className={styles.listLabel}><strong>Cuerpo Vivo</strong><em>Trust Index continuo</em></span>
          </li>
        </ul>
      </div>

      {/* ============ 08 — Lo que nadie tiene en Colombia ============ */}
      <div className={styles.slide}>
        <p className={styles.eyebrow}>Diferenciador</p>
        <h2 className={styles.headline}>
          Casa. Red Viva. <br />
          Tejido. <em>Trust Index</em>.
        </h2>
        <p className={styles.sub}>
          Ninguna universidad colombiana tiene estos cuatro órganos juntos.
        </p>
        <p className={styles.foot}>
          Uninorte tiene tres herramientas separadas — LucIA, NAIA, MarIA. <br />
          El Pacto es una sola arquitectura.
        </p>
      </div>

      {/* ============ 09 — GPTW: UNAD ya entró, ICESI puede ser la primera privada ============ */}
      <div className={styles.slide}>
        <p className={styles.eyebrow}>Great Place to Work Colombia · 2025</p>
        <h2 className={styles.headline}>
          UNAD está en el <em>top 10</em>.
        </h2>
        <p className={styles.sub}>
          ICESI puede ser <strong>la primera universidad privada certificada</strong> de Colombia.
        </p>
      </div>

      {/* ============ 10 — El piloto ============ */}
      <div className={styles.slide}>
        <p className={styles.eyebrow}>Piloto · 6 meses</p>
        <h2 className={styles.headline}>
          Un brazo. Una <em>pregunta</em>.
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}><strong>Escuela de Educación</strong></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}><strong>20 docentes + 30 estudiantes</strong></span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}><strong>Lectura</strong> a Moodle y Ellucian Student</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}>Sin tocar <strong>GECU, SAMAN, EVA</strong></span>
          </li>
        </ul>
      </div>

      {/* ============ 11 — Tres líneas rojas ============ */}
      <div className={styles.slide}>
        <p className={styles.eyebrow}>Antes de cualquier conversación</p>
        <h2 className={styles.headline}>
          Tres <em>líneas rojas</em>.
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}>No <strong>diagnostica</strong> salud mental.</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}>No <strong>reemplaza</strong> al docente.</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listMarker}>·</span>
            <span className={styles.listLabel}>No <strong>comparte datos</strong> con calificación, admisión, ni empleabilidad.</span>
          </li>
        </ul>
      </div>

      {/* ============ 12 — Cierre ============ */}
      <div className={styles.slide}>
        <h2 className={styles.headlineItalic}>
          El alma mater <br />
          <span className={styles.accent}>no es metáfora</span>.
        </h2>
        <p className={styles.sub}>
          ICESI ya es la mejor académicamente. <br />
          Falta ser la mejor para vivirla.
        </p>
        <div className={styles.ornament} aria-hidden="true">⁂</div>
        <div className={styles.signature}>
          <strong>Daniel Ospina</strong>
          xpandia · Cali<br />
          daniel@xpandia.co<br />
          leviatan.xpandia.co
        </div>
      </div>
    </Book>
  );
}
