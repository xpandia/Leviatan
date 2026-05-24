# Brief: Intentos previos similares a Leviatán en ICESI y su entorno

> Research crítico antes de mandar el memo a Piedrahita. Documenta qué ya existe en ICESI, qué hace la competencia 4U, qué patrones de fracaso conocer.
> Fecha: 2026-05-24 · Sandbox curso Lab10.

---

## 1. Resumen ejecutivo

- **ICESI NO está en territorio virgen.** Hay al menos **tres iniciativas activas que se solapan directamente con tres de los cuatro órganos de Leviatán**: GECU (gestor curricular con IA), SAMAN (LMS nuevo con analytics en tiempo real y rutas de aprendizaje personalizadas) y EVA (asistente de IA para diseño curricular). Todas bajo la **Decanatura de Innovación Educativa y Fortalecimiento del PEI** (creada 2023, liderada por Ana Lucía Paz Rueda).
- **"Owner" institucional del tema IA en docencia:** **Henry Arley Taquez Quenguan** ("Líder en IA+TIC para la educación"), reporta a la Decanatura. Cualquier pitch a Piedrahita pasará probablemente por él como filtro técnico. Actor académico, no comercial — eso cambia el tono.
- **No hay evidencia pública de fracasos explícitos** pero **sí hay ausencia llamativa de métricas de adopción**, fechas de lanzamiento y presupuestos en las comunicaciones sobre GECU/SAMAN/EVA. Señal típica de iniciativas en piloto que no escalan.
- **Benchmark 4U más fuerte: Uninorte**, con LucIA + NAIA + MarIA — los tres cubren conceptualmente la mayor parte del scope de Leviatán y tienen métricas publicadas (5.985 estudiantes, 960 colaboradores, ~550 asistentes personalizados). Debe ser anticipado en el pitch.
- **El órgano más diferenciado de Leviatán es "Casa" (residential college digital)** — no encontré nada parecido en Colombia ni en el 4U. El "Cuerpo Vivo" con Trust Index estilo GPTW tampoco aparece en ningún competidor. **Esos dos son nuestro foso.**

---

## 2. ICESI — iniciativas previas comparables

### GECU (Gestor Curricular)
- **Año:** activo desde 2023-2024. **Estado:** vivo y premiado.
- **Qué es:** app web con IA integrada para diseño de cursos y alineación curricular, dirigida a docentes.
- **Reconocimiento:** Premio CIDESCO "Innovación docente de excelencia".
- **Solapamiento con Leviatán:** medio-alto con **Co-piloto del docente**. Ya hay un sistema operando ahí.
- **Fuente:** [Icesi Virtual](https://www.icesi.edu.co/7575-con-icesi-virtual-lo-haces-real/), [GECU login](https://www.icesi.edu.co/gecu/login).

### SAMAN (nuevo LMS)
- **Estado:** en implementación, primera etapa pregrado semestres 1 y 2.
- **Promete:** automatizar AVAC, **generar rutas de aprendizaje personalizadas**, **analíticas de aprendizaje en tiempo real**.
- **Solapamiento con Leviatán:** ALTO con **Compañero del estudiante** Y con **Cuerpo Vivo**. **Es probablemente el competidor interno más serio.**
- **Señal de alerta:** "primera etapa" sin métricas públicas de adopción ni expansión. Posible piloto sin escalar.
- **Fuente:** [SAMAN](https://saman.icesi.edu.co/).

### EVA + AVAC+IA
- **Estado:** en desarrollo.
- **Qué es:** chatbot IA que apoya diseño curricular por competencias, integrando datos AVAC.
- **Solapamiento con Leviatán:** ALTO con **Co-piloto del docente**.
- **Fuente:** [Área de Innovación Curricular](https://www.icesi.edu.co/decanatura-de-innovacion-educativa-y-fortalecimiento-del-pei/area-de-innovacion-curricular-y-evaluacion/).

### Migración Ellucian Student (post-Banner)
- **Estado:** implementada con éxito técnico.
- **Pista crítica:** Ellucian publica que *"el principal reto fue la transición cultural, ya que el cambio implicó transformar procesos y hábitos más allá de la tecnología"*. **ICESI ya sufrió "implementamos pero no se adopta culturalmente".**
- **Fuente:** [Ellucian blog](https://www.ellucian.com/es-mx/blog/universidad-icesi-impulsa-su-educacion-continua-con-ellucian-student).

### Área de Experiencia Estudiantil
- Coordinada por Mónica Alexandra Ramírez Guevara y Juan Felipe Molina Sierra.
- **No menciona plataforma propia, ningún early-warning system, ni mentoring digital.** Solo VEAA (valoración formativa voluntaria) y Laboratorio de Co-creación con Estudiantes.
- **Implicación:** este es exactamente el slot donde **Compañero** tiene menos competencia interna. El equipo humano debe ser stakeholder, no contraparte.

### Capacidad institucional en IA (junio 2025)
- ICESI presentó oficialmente su **"nueva capacidad institucional en Inteligencia Artificial"** como iniciativa estratégica.
- **Importancia:** Piedrahita ya posicionó "IA institucional" como pilar discursivo. El pitch debe asumir que no es novedad.
- **Fuente:** [ACIS](https://www.acis.org.co/blog/noticias-2/para-promover-el-uso-de-la-inteligencia-artificial-en-las-organizaciones-la-universidad-icesi-expande-sus-recursos-de-ensenanza-y-acompanamiento-950).

### Deserción ICESI = 3,42% anual
- ICESI está entre las acreditadas con **menor deserción de Colombia**.
- **Cambia el argumento de venta:** no entrar por "bajamos deserción" porque ya está baja. Entrar por **experiencia / calidad / posicionamiento competitivo**.
- **Fuente:** [Infobae](https://www.infobae.com/colombia/2026/02/12/estas-son-las-universidades-acreditadas-con-mayor-desercion-en-colombia-comparacion-con-las-mejor-posicionadas-en-rankings-internacionales/).

---

## 3. Universidades 4U (CESA, EAFIT, Uninorte)

### Uninorte — el benchmark peligroso
- **LucIA:** plataforma institucional de IA generativa. Lanzamiento 2do semestre 2025. Integra Claude, ChatGPT, Gemini vía API. **Métricas:** 960 colaboradores, 679 docentes, 5.985 estudiantes, ~550 asistentes personalizados, 100+ asistentes de aula. Liderada por Carlos Martínez-Troncoso.
- **NAIA:** asistente virtual ganador Uninorte IA 2024. Cinco roles incluyendo guía comunitaria. Solapa con **Compañero + Casa**.
- **MarIA:** ML predictivo de deserción (académica, financiera, psicológica). Liderado por Luz Adriana Mejía. **Equivalente directo a Compañero en dimensión predictiva.**
- **Conclusión:** Uninorte ya tiene operando (con métricas) lo que Leviatán propone, en una universidad **4U hermana**. Piedrahita lo conoce con alta probabilidad.
- **Fuentes:** [El Heraldo](https://www.elheraldo.co/contenidos-en-alianza/2026/05/13/lucia-la-plataforma-impulsada-con-ia-que-transforma-la-experiencia-universitaria-en-uninorte/), [Uninorte MarIA](https://www.uninorte.edu.co/en/web/grupo-prensa/w/proyecto-maria-utilizara-inteligencia-artificial-para-apoyar-la-retencion-estudiantil), [X NAIA](https://x.com/UninorteCO/status/1891845899992826258).

### CESA
- Lanzó "nuevo sistema con IA y aprendizaje personalizado" en sus 50 años. Discurso fuerte, pocas piezas técnicas publicadas.
- Tiene IAcelera para ejecutivos. **No encontré chatbot estudiantil ni copiloto docente desplegado.**

### EAFIT
- Oferta académica fuerte en IA (diplomados, dirección ejecutiva con IA), **pero no encontré chatbot estudiantil, copiloto docente institucional, ni early-warning system desplegado.** Posible territorio aún no cubierto en el 4U.

---

## 4. Otras universidades top Colombia

### Uniandes — ChatMigo IA
- Chatbot beta para dudas reglamentarias. Multidisciplinar: Transformación Digital + Secretaría General + Sistemas e Ingeniería + **Microsoft como partner**.
- **Define el "tipo" de proyecto que la academia colombiana de alto nivel considera "serio": multidisciplinario, con vendor global de respaldo.**
- **Fuente:** [Uniandes](https://www.uniandes.edu.co/es/noticias/comunidad/chatmigo-ia-inteligencia-artificial-en-uniandes).

### Universidad del Rosario
- Alianza Samsung Innovation Campus 2024. Guías ChatGPT para profes. **No encontré plataforma propia.**

### Javeriana
- Discurso fuerte sobre IA generativa + "acompañamiento personalizado" jesuita. Estudian **Khanmigo** como referente. Tienen **TuTutor** (laboratorio econ educación). **No encontré copiloto docente o asistente estudiantil institucional desplegado.**

### Tec de Monterrey (referencia regional, techo)
- **TECbot** (2021, Azure): 40.000+ usuarios, 250.000+ conversaciones, 133 temas resueltos.
- **TECgpt** (modelo generativo propio, "primer modelo propio de IA generativa en universidad LATAM").
- Es el techo de referencia que ICESI conoce.

---

## 5. Egresados / startups con productos relacionados a ICESI

**No encontré evidencia pública** de egresados ICESI con startups específicas de IA agéntica para universidades que hayan pitcheado y sido rechazados. **Vacío declarado**: requeriría LinkedIn search / entrevistas directas no automatizables.

---

## 6. Señales de fracaso

### Sospechas (no confirmadas)
- **SAMAN**: anunciada como "primera etapa pregrado 1-2 semestre", sin comunicación posterior con métricas. Patrón típico de piloto que no avanza.
- **EVA + AVAC+IA**: descritos como "en desarrollo", "plataforma que acompañará" — lenguaje futuro sostenido.
- **Decanatura de Innovación Educativa**: creada 2023, tres años después aún "conformando grupo de trabajo" y "reflexionando sobre integración crítica y ética". Mucha gobernanza, poca pieza desplegada.

### Confirmado
- **Ellucian/ICESI:** el vendor mismo publica que "el principal reto fue cultural, no técnico". **Fracaso parcial de adopción confirmado.**

### No encontrado
- Notas de cierre, comentarios estudiantiles negativos en Reddit/Twitter, convenios silenciados. **Silencio puede ser real o reflejar buena gestión de comunicación.**

---

## 7. Patrones globales que importan

- **Khanmigo (Khan Academy + Microsoft):** principal referente mundial. Crítica recurrente: *"es todo cerebro, sin corazón"*. Punto débil: estudiantes sin motivación propia. Leviatán debe responder cómo aborda esto.
- **EAB Navigate (USA):** plataforma comercial de student success más adoptada. Métrica reportada: 3-15% incremento en graduación, 65% reducción en withdrawals en algunos casos. **Benchmark cuantitativo internacional.**
- **Atena chatbot mental health (Europa COVID):** sólo **58% de participantes completaron** la intervención. **Patrón típico**: chatbots de bienestar tienen tasas de abandono altas.
- **fAIrLAC/BID:** marco LatAm de IA responsable en educación. Framework regional al que cualquier proyecto serio en Colombia debe poder mapearse.
- **Patrón de fracaso más documentado:** chatbots universitarios fallan por (a) falta de seguimiento humano, (b) integración pobre con datos del estudiante, (c) lanzamiento sin entrenamiento docente.

---

## 8. Implicaciones para el memo a Piedrahita

1. **Mencionar GECU, SAMAN y EVA explícitamente y posicionar a Leviatán como capa orquestadora**, no reemplazo. Si el memo ignora estas tres piezas, será leído como *"no hicieron tarea"*. Si las integra, Leviatán pasa de competidor a *"tejido conectivo"* — argumento más fuerte y políticamente barato.
2. **Anticipar el benchmark Uninorte (LucIA+NAIA+MarIA)** antes de que Piedrahita lo mencione: *"Uninorte tiene tres sistemas separados — Leviatán los integra en una arquitectura única con un órgano que ellos no tienen: comunidad de pertenencia"*.
3. **No vender por reducción de deserción** — ICESI tiene 3,42% (de los mejores). Vender por experiencia/calidad/identidad institucional (*"estudiante ICESI siente que la U lo conoce"*), eficiencia docente, posicionamiento frente a Andes/Tec.
4. **Henry Taquez es stakeholder obligado.** No enemigo — evaluador técnico. Mencionarlo respetuosamente y proponer rol claro evita resistencia interna. **Ana Lucía Paz Rueda (Decana) es la otra interlocutora crítica.**
5. **Objeción anticipada #1:** *"ya tenemos grupo de IA institucional con tres años trabajando"*. Respuesta: ese grupo está enfocado en **gobernanza, ética y diseño curricular docente**. Leviatán construye lo que el grupo dijo que se necesita pero nadie ejecutó: **estudiante + comunidad + Trust Index institucional**.
6. **Objeción anticipada #2:** *"Ellucian + Banner + Moodle + SAMAN ya hacen analytics"*. Respuesta: hacen **reportes**, no **agentes**. Leviatán es **acción autónoma + intervención**, no dashboards adicionales.
7. **Diferenciador no contestable hoy en Colombia:** Casa (residential college digital) + Cuerpo Vivo (Trust Index). Inflar estas dos piezas en el pitch.

---

## 9. Hallazgos críticos no verificados

- No verifiqué directamente el [informe de gestión 2024 ICESI PDF](https://www.icesi.edu.co/wp-content/uploads/2025/04/informe-gestion-2024.pdf). Probable que contenga métricas SAMAN/GECU. **Recomendación**: descargarlo antes del pitch.
- No verifiqué si existe chatbot de admisiones / WhatsApp activo en ICESI.
- No encontré egresados ICESI con startups ed-tech pitcheando productos similares. Requiere LinkedIn / La Silla Vacía / Bloomberg LATAM.
- Estado real de adopción SAMAN/EVA: sin métricas públicas. Sospecha de "piloto sin escalar" razonable pero no probada.
- No verifiqué convenios ICESI con Microsoft Education / Google for Education / Coursera / EAB.
- Asumo que Piedrahita conoce LucIA de Uninorte (perfil 4U + nota El Heraldo may 2026) — sin evidencia directa.

---

## 10. Fuentes consultadas

**ICESI institucional:**
- [Icesi Virtual — GECU, SAMAN, Salas Inmersivas](https://www.icesi.edu.co/7575-con-icesi-virtual-lo-haces-real/)
- [Integración estratégica de IA generativa](https://www.icesi.edu.co/integracion-estrategica-inteligencia-artificial-generativa/)
- [Decanatura de Innovación Educativa](https://www.icesi.edu.co/decanatura-de-innovacion-educativa-y-fortalecimiento-del-pei/)
- [Área de Innovación Curricular y Evaluación](https://www.icesi.edu.co/decanatura-de-innovacion-educativa-y-fortalecimiento-del-pei/area-de-innovacion-curricular-y-evaluacion/)
- [Área de Experiencia Estudiantil](https://www.icesi.edu.co/decanatura-de-innovacion-educativa-y-fortalecimiento-del-pei/area-de-experiencia-estudiantil-y-proyectos-transversales/)
- [SAMAN login](https://saman.icesi.edu.co/)
- [Informe gestión 2024 (PDF, no revisado)](https://www.icesi.edu.co/wp-content/uploads/2025/04/informe-gestion-2024.pdf)

**Vendors:**
- [Ellucian caso ICESI Student](https://www.ellucian.com/es-mx/blog/universidad-icesi-impulsa-su-educacion-continua-con-ellucian-student)

**Liderazgo ICESI:**
- [Semana — Piedrahita transformación ICESI](https://www.semana.com/mejor-colombia/articulo/como-esta-transformando-icesi-la-educacion-superior-en-colombia-ante-los-desafios-del-mercado-laboral/202414/)
- [ACIS — IA institucional ICESI jun 2025](https://www.acis.org.co/blog/noticias-2/para-promover-el-uso-de-la-inteligencia-artificial-en-las-organizaciones-la-universidad-icesi-expande-sus-recursos-de-ensenanza-y-acompanamiento-950)

**Benchmarks 4U y Colombia:**
- [El Heraldo — LucIA Uninorte](https://www.elheraldo.co/contenidos-en-alianza/2026/05/13/lucia-la-plataforma-impulsada-con-ia-que-transforma-la-experiencia-universitaria-en-uninorte/)
- [Uninorte — MarIA retención](https://www.uninorte.edu.co/en/web/grupo-prensa/w/proyecto-maria-utilizara-inteligencia-artificial-para-apoyar-la-retencion-estudiantil)
- [Uniandes — ChatMigo IA](https://www.uniandes.edu.co/es/noticias/comunidad/chatmigo-ia-inteligencia-artificial-en-uniandes)
- [Semana — CESA sistema IA](https://www.semana.com/educacion/articulo/conozca-el-nuevo-sistema-del-cesa-que-integra-inteligencia-artificial-y-aprendizaje-personalizado/202400/)
- [Hoy en la Javeriana — IA generativa retos](https://www.javeriana.edu.co/hoy-en-la-javeriana/w/hoy-en-la-javeriana-retos-y-oportunidades-de-la-ia-generativa-en-la-educacion)
- [Infobae — ranking deserción universidades acreditadas](https://www.infobae.com/colombia/2026/02/12/estas-son-las-universidades-acreditadas-con-mayor-desercion-en-colombia-comparacion-con-las-mejor-posicionadas-en-rankings-internacionales/)
- [Conecta Tec — TECbot wins competition](https://conecta.tec.mx/en/news/national/institution/tecs-virtual-assistant-wins-international-chatbot-competition)

**Patrones globales:**
- [Evelyn Learning — EWS retención](https://www.evelynlearning.com/blog/the-student-retention-crisis-how-ai-powered-early-warning-systems-are-predicting-dropouts-85-earlier-and-saving-universities-23-billion)
- [fAIrLAC/BID — EWS ML deserción](https://fairlac.iadb.org/en/early-warning-system-student-dropout-risk-using-machine-learning)
- [Esade — Khanmigo y futuro educación](https://www.esade.edu/es/articulos/khanmigo-khan-academy-y-el-futuro-de-la-educacion)
- [PMC — Atena chatbot engagement 58%](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8166265/)
- [ResearchGate — Chatbot IA prevenir abandono educ superior](https://www.researchgate.net/publication/386204298_Chatbot_de_IA_para_prevenir_el_abandono_de_la_educacion_superior_una_revision_de_la_literatura)
