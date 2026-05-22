# Módulo 07 — De Jugador a Director Técnico

> Síntesis del módulo cruzada con dos referencias externas:
> - **Anthropic, "2026 Agentic Coding Trends Report"** — qué está pasando en la industria.
> - **Paul Graham, "Do Things that Don't Scale" (jul 2013)** — el contrapeso fundacional.
>
> El módulo dice *cómo escalar con IA*. Anthropic confirma con datos *que ya está pasando*. PG recuerda *cuándo no debes escalar todavía*.

---

## 1. Tesis del módulo

Escalar con IA **no es promptear más rápido**, es cambiar de rol:

| Antes (Jugador)              | Después (Director Técnico)                   |
|------------------------------|----------------------------------------------|
| Escribir el código            | Diseñar qué agentes escriben código          |
| Pedir al chat "hazme X"       | Fichar Skills/MCPs/SubAgents especializados  |
| Repetir prompts manualmente   | Crear pipelines que automatizan prompts      |
| Ejecutar tarea por tarea      | Orquestar múltiples agentes en paralelo      |
| Ser el cuello de botella      | Diseñar el sistema que escala sin ti         |

**Síntoma diagnóstico:** si repites peticiones casi idénticas al chat, sigues siendo Jugador. La fatiga es la señal.

**Analogía Barcelona 2012:** Messi no se volvió mejor jugador en seis meses; Guardiola le diseñó un sistema donde cada pieza sabía su rol. Sin sistema, talento individual = lobo solitario. Con sistema, talento + arquitectura = exponencial.

**Herramientas disponibles (tu plantilla):**
- **Skills** — procedimientos repetibles encapsulados (jugadores entrenados para una tarea).
- **MCPs** (Model Context Protocol) — conexiones a sistemas externos que amplían capacidades.
- **SubAgents** — agentes con rol específico que trabajan en paralelo.

---

## 2. Cómo lo refuerza el reporte de Anthropic 2026

El reporte identifica **8 tendencias** organizadas en tres categorías. Las que validan directamente la tesis del módulo:

### Foundation trend

**Trend 1 — El ciclo de vida del software cambia drásticamente.** El SDLC tradicional (semanas-meses por ciclo) colapsa a horas-días por ciclo gracias a implementación dirigida por agentes. El rol humano se desplaza de *implementer* a *orchestrator*: arquitectura, coordinación de agentes, evaluación de calidad y descomposición estratégica del problema.

### Capability trends

**Trend 2 — Single agents evolucionan a equipos coordinados.** Pasa de un solo agente con un context window a arquitecturas jerárquicas: un *orchestrator agent* que descompone, distribuye a especialistas (Architecture, Implementation, Testing, Review/Docs) con contextos dedicados, y sintetiza el resultado. **Este es literalmente el "sistema de juego" del módulo.**

- *Caso Fountain:* 50% más rápido en screening, 40% más rápido en onboarding, 2x conversiones de candidatos. Centro logístico nuevo staffeado en **<72 h** vs. 1+ semana.

**Trend 3 — Agentes long-running construyen sistemas completos.** Los horizontes de tareas pasan de minutos a días/semanas.

- *Caso Rakuten:* extracción de vectores de activación en vLLM (12.5M líneas, múltiples lenguajes) completada en **7 horas autónomas, 99.9% de precisión numérica**.

**Trend 4 — La supervisión humana escala vía colaboración inteligente.** No se trata de quitar humanos del loop, sino de hacer que su atención cuente donde importa. Los agentes aprenden cuándo pedir ayuda. La "paradoja de la colaboración": engineers usan IA en ~60% de su trabajo, pero solo logran "full delegation" en 0–20% de tareas. **AI is a constant collaborator, not a replacement.**

### Impact trends

**Trend 6 — Las ganancias de productividad reconfiguran la economía del software.**

- Caso TELUS: **>13,000 soluciones AI** creadas, código de ingeniería 30% más rápido, **>500,000 horas ahorradas**, promedio **40 min ahorrados por interacción**.
- Hallazgo Anthropic: **~27% del trabajo asistido por IA son tareas que no se habrían hecho de otro modo** (papercuts, dashboards exploratorios, tooling nice-to-have). La productividad sube por **volumen de output**, no solo por velocidad.

**Trend 7 — Casos no-técnicos se expanden por la organización.**

- Caso Zapier: **89% de adopción AI** organizacional, **>800 agentes deployados** internamente.
- Caso legal Anthropic: review de marketing pasó de 2-3 días a 24 h.

### Prioridades para 2026 (cierre del reporte)

1. **Mastering multi-agent coordination** — manejar complejidad que un solo agente no puede.
2. **Scaling human-agent oversight** — sistemas de review automatizado que enfocan la atención humana donde importa.
3. **Extending agentic coding beyond engineering** — empoderar expertos de dominio fuera de ingeniería.
4. **Embedding security architecture** desde el inicio.

> *"The key to success lies in understanding that the goal isn't to remove humans from the loop — it's to make human expertise count where it matters most."*

**Conexión con el módulo:** el reporte de Anthropic es la evidencia industrial de que el rol de "Director Técnico" no es teoría motivacional — es la trayectoria observable de las organizaciones que ya están ganando con IA.

---

## 3. El contrapeso de Paul Graham — "Do Things that Don't Scale"

PG (2013) plantea la tesis opuesta para founders en etapa temprana: **al inicio, debes hacer cosas que NO escalan**. Reclutar usuarios uno por uno, atender manualmente, consultoría 1:1, hardware ensamblado a mano. Los productos despegan porque los founders los empujan, no porque tengan un sistema mágico.

> *"Startups take off because the founders make them take off."*

### Por qué no contradice al módulo — lo complementa

El módulo dice: **deja de ser el cuello de botella ejecutando tareas repetitivas.**
PG dice: **al inicio, sé tú el que hace el trabajo manual para aprender qué construir.**

Ambas verdades coexisten en fases distintas:

| Fase                                     | Mandato                                                                 |
|------------------------------------------|-------------------------------------------------------------------------|
| Descubrimiento / búsqueda de product-market fit | Haz tú el trabajo manual. Sin sistema. PG mode.                  |
| Repetición detectada / patrón claro       | Diseña el sistema. Sube de Jugador a Director Técnico. Módulo 07 mode. |

**Regla práctica:** no automatices lo que no entiendes. Primero hazlo tres veces a mano para entender el shape del problema, luego construye el Skill/SubAgent/MCP. Automatizar en fase de descubrimiento congela suposiciones equivocadas.

> Si lees ambas cosas al revés, sale el error clásico:
> - Automatizar antes de tener tracción → construyes un sistema perfecto para un problema irrelevante.
> - Quedarte haciendo trabajo manual cuando ya hay patrón → te conviertes en el cuello de botella que el módulo describe.

---

## 4. Acciones concretas para Leviatan

Aplicado a este repo y al ciclo BPIR del módulo anterior:

- [ ] **Identificar las 3 tareas más repetitivas** que ya estoy haciendo al chat. Si las hago 3+ veces casi iguales, candidatas a Skill.
- [ ] **Mapear qué MCPs ya están conectados** y qué fuentes de contexto faltan (GitHub, Supabase, Vercel, Linear, etc.).
- [ ] **Diseñar el primer SubAgent especializado** del repo (candidatos naturales: code-reviewer alineado al `protocolo-review-ia.md`, brief-writer alineado al `plantilla-brief-ia.md`).
- [ ] **Definir checkpoints humanos** (no eliminar al humano del loop, definir *dónde* su atención agrega valor: decisiones de arquitectura, casos edge, seguridad).
- [ ] **Mantener vivo el contrapeso PG:** antes de automatizar algo, validar que el patrón es real haciéndolo a mano 2-3 veces.

---

## 5. Frases para guardar

- *"Tu valor no está en escribir líneas de código, está en pensar en arquitecturas de agentes."* — Módulo 07.
- *"AI serves as a constant collaborator, but using it effectively requires thoughtful set-up and prompting, active supervision, validation, and human judgment."* — Anthropic 2026.
- *"Startups take off because the founders make them take off."* — Paul Graham.
- *"The goal isn't to remove humans from the loop — it's to make human expertise count where it matters most."* — Anthropic 2026.
