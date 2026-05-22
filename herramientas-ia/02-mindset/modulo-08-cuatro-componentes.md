# Módulo 08 — Los 4 Componentes Fundamentales

> Reglas · Skills · MCPs · SubAgents.
> Cuándo crear cada uno y cómo se cargan en el contexto del agente.
>
> Refs: módulo 08 de Lab10, [modelcontextprotocol.io](https://modelcontextprotocol.io/docs/getting-started/intro), [cursor.com/es/docs/mcp](https://cursor.com/es/docs/mcp).

---

## 1. La cancha completa

| Pieza               | Qué es                                                      |
|---------------------|-------------------------------------------------------------|
| **Cancha**          | El sistema completo donde opera el agente                   |
| **Código fuente**   | Contexto, archivos, terminal                                |
| **Pelota**          | Acciones del agente (leer, escribir, editar, ejecutar bash) |
| **Jugadores**       | El agente y sus capacidades                                 |
| **DT (Director Técnico)** | Tú, diseñando el sistema, no microgestionando            |

**Cambio mental clave:** dejar de gritar cada pase ("hazme X, ahora Y, ahora Z") y empezar a observar huecos del sistema para mejorarlo con los 4 componentes.

---

## 2. Los 4 componentes, lado a lado

| Componente   | Analogía             | Cómo se carga                                  | Cuándo crear                                                  |
|--------------|----------------------|------------------------------------------------|---------------------------------------------------------------|
| **Reglas**   | Principios de juego  | **Siempre**, en cada prompt                    | El concepto se repite en CADA interacción (seguridad, estilo) |
| **Skills**   | Jugadas ensayadas    | **Progressive disclosure** (nombre+desc → detalle al invocar) | Procedimiento >3 usos, >5 pasos, nombre memorable             |
| **MCPs**     | Ojeadores / data ext | **Full disclosure** (todas las tools visibles) | Necesitas datos externos (DB/API) que hoy pides a mano        |
| **SubAgents**| Jugadores especiales | En **paralelo / background**, contexto propio  | Validación o tarea secundaria que desviaría el flujo principal|

### 2.1 Reglas — el código de juego

Principios que se cargan automáticamente. No se negocian.

- **Dónde viven:** `CLAUDE.md` en raíz del proyecto, o `.cursor/rules/`.
- **Se aplican a:** todos los prompts de esa sesión / proyecto.
- **Ideal para:** seguridad, estilo de código, principios de diseño, convenciones del proyecto.

Ejemplo:
```
# Principios de seguridad
- Nunca ejecutar rm -rf sin confirmación explícita
- Siempre revisar scripts bash antes de ejecutar
- Verificar permisos de archivo antes de editar
```

### 2.2 Skills — jugadas ensayadas

Procedimientos reutilizables empaquetados como un manual al que el agente accede solo cuando lo necesita.

- **Progressive disclosure:** el agente solo ve `nombre + descripción`. Al invocar la skill, se le carga el procedimiento completo.
- **Beneficio:** reduce tokens y ruido. Tienes 50 skills disponibles y solo se carga la que aplica.
- **Formato típico:** archivo `.skill` con frontmatter (name, description) + cuerpo con los pasos.

Ejemplo de esqueleto:
```
Nombre: "Generar Reporte Excel"
Descripción: "Crea un reporte formateado en Excel con datos y gráficos"

Detalles (cargados solo al invocar):
1. Obtener datos de la fuente
2. Transformar y validar
3. Aplicar formato
4. Insertar gráficos
5. Guardar archivo
```

### 2.3 MCPs — conexiones externas

**MCP = Model Context Protocol.** Estándar abierto (Anthropic, 2024) — "USB-C para IA". Conecta apps de IA a sistemas externos sin escribir un wrapper custom por cada integración.

**Arquitectura cliente-servidor:**

| Lado          | Quién es                              | Qué hace                                         |
|---------------|---------------------------------------|--------------------------------------------------|
| **Cliente**   | Claude, Cursor, ChatGPT, VS Code      | Inicia conexión, consume servicios, llama tools  |
| **Servidor**  | Conector (GitHub, Postgres, Linear…)  | Expone datos y herramientas, responde solicitudes|

**Tres primitivas que un servidor MCP puede exponer:**

- **Tools** — funciones ejecutables (ej: `search_repos`, `query_db`).
- **Resources** — fuentes de datos accesibles (ej: archivos, registros DB).
- **Prompts** — workflows y plantillas especializadas.

**Configuración en Cursor:**

- **Project-level:** `.cursor/mcp.json` (raíz del repo) — específico del proyecto.
- **Global:** `~/.cursor/mcp.json` — disponible en cualquier proyecto.

Formato base:
```json
{
  "mcpServers": {
    "nombre-servidor": {
      "command": "npx",
      "args": ["mcp-server"],
      "env": { "API_KEY": "${env:MI_API_KEY}" }
    }
  }
}
```

**Transports soportados por Cursor:** `stdio` (local), `SSE` (remoto), `HTTP` (remoto).

**Notas de seguridad:**
- Por defecto, Cursor pide aprobación antes de usar una tool MCP.
- Auto-aprobación configurable en `~/.cursor/permissions.json`.
- Usa variables de entorno (`${env:NAME}`) para secrets, **nunca** hardcoded.
- Si un servidor falla, los demás siguen funcionando (aislamiento).
- Logs en Panel de Salida → "MCP Logs".

**Casos de uso reales:**
- Acceso a Google Calendar + Notion para asistencia personalizada.
- Claude Code generando apps web desde diseños Figma.
- Chatbot empresarial conectado a múltiples DBs.
- Control de Blender + impresoras 3D.

### 2.4 SubAgents — jugadores especiales

Agentes delegados con su propio contexto que corren en paralelo o background.

- **Beneficio principal:** **no contaminan el contexto principal**. Tu hilo conversacional sigue limpio; el subagent trabaja aparte y solo te devuelve el resultado.
- **Ideal para:** code review, validación, generación de tests, búsqueda exhaustiva, cualquier tarea con mucho ruido intermedio.
- **Patrón típico:** definir un subagent especialista (ej: `code-reviewer`) con instrucciones propias y herramientas restringidas.

Ejemplo de orquestación:
```
Tarea principal: Desarrollar feature X
  └─ SubAgent paralelo: revisar seguridad
  └─ SubAgent paralelo: validar tests
  └─ SubAgent paralelo: revisar docs
→ Reportes se sintetizan al final
```

---

## 3. Matriz de decisión rápida

| Si tu necesidad es…                                    | El componente correcto es… | Por qué                                            |
|--------------------------------------------------------|-----------------------------|----------------------------------------------------|
| Un principio que aplica a CADA interacción             | **Regla**                   | Se carga siempre, sin que tengas que invocarla     |
| Un procedimiento de 5+ pasos que usas 3+ veces         | **Skill**                   | Reutilizable, reduce tokens vía progressive disclosure |
| Acceder a datos externos (DB, API, SaaS)               | **MCP**                     | Acceso directo sin contaminar contexto             |
| Validar / revisar / tarea paralela especializada       | **SubAgent**                | Delegación con contexto propio, no desvía el flujo |

**Pregunta diagnóstica simple:**

1. ¿Es un principio o regla? → Regla.
2. ¿Es un procedimiento concreto? → Skill.
3. ¿Es una fuente de datos externa? → MCP.
4. ¿Es una tarea paralela / validación? → SubAgent.

---

## 4. Cómo se cargan en el contexto (importante)

| Componente   | Modelo de carga       | Costo en tokens                                  |
|--------------|------------------------|--------------------------------------------------|
| Reglas       | **Always-on**          | Alto si abusas (cuidado con CLAUDE.md gigantes)  |
| Skills       | **Progressive**        | Bajo idle; sube solo cuando se invoca            |
| MCPs         | **Full (listing)**     | Lista de tools siempre visible; ejecución bajo demanda |
| SubAgents    | **Isolated**           | No tocan el contexto principal; cuestan en su propio hilo |

**Implicación práctica:** las Reglas deben ser cortas y operacionales; los Skills pueden ser largos sin penalizar; los MCPs con muchas tools sí inflan el listing visible — selecciónalos con criterio.

---

## 5. Aplicación al ciclo BPIR (cierre del módulo 06)

Cada artefacto que ya creamos se puede materializar como un componente:

| Artefacto del repo                     | Componente natural                                  |
|----------------------------------------|-----------------------------------------------------|
| `plantilla-brief-ia.md`                | **Skill** "scaffold-brief" que genera un brief nuevo desde una descripción |
| `protocolo-review-ia.md`               | **SubAgent** `code-reviewer` que ejecuta los 5 puntos sobre un diff |
| Convenciones del repo Leviatan         | **Regla** en `CLAUDE.md`                            |
| Datos de Supabase / GitHub / Linear    | **MCPs** correspondientes                           |

---

## 6. Ejercicio propuesto (próximo paso)

Identificar en mi workflow real (xpandia / Galileo / Óptima / etc.) candidatos a cada componente:

- [ ] **3 Reglas** que ya repito en cada conversación.
- [ ] **2-3 Skills** para procedimientos que ya hice >3 veces.
- [ ] **MCPs** que ya tengo conectados y cuáles me faltan (Supabase, GitHub, Vercel, Linear, Resend, Notion).
- [ ] **1 SubAgent** prioritario (candidato natural: `code-reviewer` alineado al `protocolo-review-ia.md`).

---

## 7. Frase para cerrar

> "Pasas de ser Guardiola desesperado gritando cada pase, a ser Guardiola observando huecos en el sistema y mejorándolo. El agente es el equipo. Tú diseñas el juego."
