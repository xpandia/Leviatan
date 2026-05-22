# Leviatán — Look & Feel

> Sistema visual y filosofía gráfica inspirados en el Apple de Jonathan Ive (1997-2010), con anclaje en la filosofía del producto (Hobbes, WBW, universidad-cuerpo).
>
> Fecha: 2026-05-22. Sandbox curso Lab10.

---

## 1. Por qué este periodo y por qué Ive

El periodo Apple **1997–2010** —de la vuelta de Steve Jobs y la promoción de Jony Ive a SVP of Industrial Design, hasta el lanzamiento del iPad— es probablemente **el momento más coherente del diseño de producto del siglo XX-XXI**. No es solo nostalgia: hay tres razones por las que sirve a Leviatán específicamente.

1. **Estética de cuidado, no de moda.** Ive llevó al extremo la filosofía de Dieter Rams: *Weniger, aber besser* — "menos, pero mejor". Cada radio, cada espesor de aluminio, cada milimétrica esquina del iPod tenían razón funcional y estética simultánea. Un sistema de IA universitaria que se llame Leviatán **no puede verse como una app más** ni como un dashboard SaaS genérico; tiene que tener la dignidad de un objeto cuidado.

2. **La metáfora del agua.** Mac OS X (2001) se llamó **Aqua**. Sus botones, scrollbars, transparencias y reflejos imitaban literalmente agua. Esto es decisivo: el Leviatán de Hobbes proviene del **Libro de Job**, donde es una criatura marina. *Aqua* y *Leviatán* comparten elemento. No tenemos que inventar la metáfora — ya está hecha históricamente.

3. **"Think Different" como postura.** La campaña de 1997 (B&W de figuras icónicas + una sola frase) declara una posición moral: *aquí los que creen que pueden cambiar el mundo, lo cambian*. Es exactamente el tono que conecta con Esteban Piedrahita (institucionalista pero reformista) y con la promesa de Leviatán a una universidad que ya es #1 académicamente: *no más, pero mejor*.

---

## 2. Filosofía de diseño Ive — 6 principios extraíbles

Sintetizado a partir de su trabajo, sus charlas (Vox, V&A, Wallpaper) y los keynotes Apple de la era.

### 2.1 Cuidado obsesivo (care)
Ive ha repetido en charlas que el diseño es *"el cuidado puesto en algo"*. Un producto bien diseñado se reconoce porque el creador puso atención **en partes que el usuario jamás verá** (interior del Mac, tornillos del iPod, empaque). En Leviatán: el código que el usuario no ve, los datos que no se exponen, los flujos backend, **deben estar tan cuidados como la UI**. El cuidado se transmite incluso cuando es invisible.

### 2.2 Honestidad de materiales (honest materiality)
El aluminio del iMac G5 es aluminio, no plástico pintado. El vidrio del iPhone es vidrio, no Plexiglás. *El material no se disfraza, se expresa*. En Leviatán: la IA no se disfraza de humano, los datos no se disfrazan de magia. Una respuesta del sistema dice "soy un agente y mi confianza es X%", no finge calidez humana.

### 2.3 Reducción esencial (essential reduction)
No es minimalismo por pereza estética. Es el resultado de **preguntar tres veces "¿esto es necesario?"** antes de incluir cada elemento. El iPod tenía un solo control (scroll wheel). El iMac G3 no tenía disquetera. Cada UI de Leviatán debe pasar el filtro: si quito este botón, ¿el sistema funciona igual? Si sí, se quita.

### 2.4 El detalle invisible que se nota (the detail you don't see but feel)
El bisel del iPhone original tiene exactamente 4 chamfered edges. El "click" del MacBook charger fue diseñado. La sombra debajo del logo de Aqua no es un png, es luz simulada. En Leviatán: los micro-animations al cambiar de pantalla, el sonido del notification, la latencia perfecta del scroll — son los detalles que hacen que el sistema *se sienta vivo*, no inerte.

### 2.5 Forma + función como una sola cosa
Ive rechazaba explícitamente la separación entre "form follows function" y "form is decoration". El asa del iMac G3 no era decoración: era una invitación física a moverlo. El círculo del iPod no era forma: era control. En Leviatán: el round/oval del logo no es decoración — es el cuerpo unificado del Leviatán. La transparencia de una card no es estética — es transparencia institucional literal.

### 2.6 Dignidad del objeto (the object deserves respect)
Un producto Ive se presenta solo, sobre fondo blanco infinito, con un solo halo de luz. **Se le concede la dignidad de un objeto contemplable**, no se acumula en un grid de stickers. En Leviatán: cada feature, cada UI screen, cada slide de pitch, **respira**. No se acumulan iconos, no se llenan dashboards de widgets. Hay espacio para que el usuario y la institución se reconozcan ahí dentro.

---

## 3. El match con Leviatán filosóficamente

| Principio Ive | Conexión con la filosofía Leviatán |
|---|---|
| Cuidado obsesivo | El cuerpo político de Hobbes cuida porque *representa* — no es servicio extractivo |
| Honestidad de materiales | No vigilancia disfrazada de cuidado (línea roja del brief filosófico) |
| Reducción esencial | El pacto es claro y mínimo — no hay letra pequeña |
| Detalle invisible | Las 5 dimensiones GPTW (credibility, respect, fairness, pride, camaraderie) son los detalles invisibles que hacen un cuerpo institucional vivo |
| Forma + función como una | La forma del Leviatán *es* su función — cuerpo que representa |
| Dignidad del objeto | El usuario es ciudadano, no consumidor; el sistema le concede esa dignidad |

**Y el match poético clave:** Aqua (Apple 2001) y Leviatán (Hobbes 1651) **comparten elemento — el agua**. Aqua era luz que pasa por agua. Leviatán era cuerpo marino indomable. Tenemos un puente visual histórico que conecta producto con filosofía sin forzar.

---

## 4. Sistema visual Leviatán

### 4.1 Paleta de color

**Base:**

| Color | Hex | Uso |
|---|---|---|
| White Infinite | `#FFFFFF` | Fondo dominante. La página respira en blanco. |
| Off-white Vela | `#FAFAF7` | Fondo secundario (cards, secciones). |
| Aluminum 100 | `#E8E8E8` | Bordes, dividers, surfaces inertes. |
| Aluminum 700 | `#3A3A3C` | Texto secundario. |
| Carbon | `#1D1D1F` | Texto primario (el negro Apple, NO `#000000` puro). |

**Acento (un solo color signature, no más):**

| Opción | Hex | Inspiración |
|---|---|---|
| **Bondi Blue** | `#0095B6` | iMac G3 original, 1998. Recomendación principal. |
| Aqua Blue | `#007AFF` | Mac OS X / iOS, más moderno y reconocible. |
| Tangerine | `#F28500` | iMac G3 mandarina. Más cálido, menos institucional. |

**Recomendación:** **Bondi Blue (#0095B6)** como acento único. Es históricamente exacto al periodo, es ya "agua" en su origen (toma su nombre de Bondi Beach, Sydney), y diferencia a Leviatán de cualquier producto SaaS contemporáneo (que defaultea a iOS blue o purple).

**Para casos especiales (mapas de calor, equity audit, dashboards):**

| Color | Hex | Uso |
|---|---|---|
| Sage | `#B6CAB8` | Estado positivo (bienestar OK). |
| Ámbar | `#E8B04B` | Advertencia (no rojo — el rojo es alarmante). |
| Coral | `#E25C5C` | Alerta crítica (escalamiento humano obligatorio). |

**Regla:** **3 acentos máximo en una pantalla**. Cuatro o más rompe la disciplina Ive.

### 4.2 Tipografía

**Pareja recomendada:**

- **Display / Headlines:** **New York** (Apple, 2019 — basada en serifs clásicos pero modernizada) o, si se quiere más histórico, **Apple Garamond** (usada por Apple en los 90s).
- **Body / UI:** **SF Pro Display** y **SF Pro Text** (Apple). Si SF no está disponible, alternativa libre: **Inter**.
- **Monospace (logs, código, datos):** **SF Mono** o **JetBrains Mono**.

**Jerarquía base:**

```
H1   New York Regular   48-56pt   tracking -1
H2   New York Regular   32-36pt   tracking -0.5
H3   SF Pro Display     24pt      semibold
Body SF Pro Text        17pt      regular   line-height 1.5
Caption SF Pro Text     13pt      regular   color Aluminum 700
```

**Reglas:**

- **Una sola familia para títulos en una pantalla.** No mezclar.
- **Texto en blanco infinito**, columnas no más anchas de **640px** en web, **66 caracteres** en pitch decks.
- **Tracking negativo** en titulares grandes (Apple lo hace desde Steve Jobs Keynotes).
- **Justificación a la izquierda siempre.** El centrado se reserva para frases tipo Think Different (1 frase sola en pantalla).

### 4.3 Iconografía y UI patterns

**Iconos:**

- Estilo **outlined**, peso de línea **1.5px**, esquinas **suavemente redondeadas (radius 2px)**.
- **Tamaño base 24px**, mínimo 16px, máximo 48px.
- **NO usar emojis** en la UI institucional. Los emojis pertenecen al chat informal, no al cuerpo institucional.
- Inspiración directa: SF Symbols (Apple).

**Cards y surfaces:**

- **Bordes: 1px Aluminum 100.** Sin sombras dramáticas — el Aqua de 2001 ya pasó. Sombras suaves máximo `0 1px 2px rgba(0,0,0,0.04)`.
- **Radius: 12px** para cards principales, 8px para botones, 6px para inputs.
- **Backdrop blur** (al estilo macOS Big Sur) **solo para overlays y modales**, no para fondo permanente.

**Botones:**

```
Primary:    fondo Bondi Blue · texto White Infinite · radius 8px · padding 12px 20px
Secondary:  fondo White · texto Carbon · borde 1px Aluminum 100
Ghost:      sin fondo · texto Bondi Blue
Destructive: fondo Coral · texto White (raro de usar — el sistema cuida, no destruye)
```

**Hover / active states:** sutiles, 4-8% opacity change. **Nunca** brillos, glows o "wow effects".

### 4.4 Fotografía y composición

**Tres géneros:**

1. **Producto sobre infinito** — UI screens / mockups sobre fondo blanco con halo de luz sutil. Tipo página de producto Apple 2003-2010.
2. **Personas en B&W** — al estilo Think Different (1997). Estudiantes, docentes y administrativos de ICESI fotografiados en blanco y negro con alta resolución y una frase corta en la composición. Esto es lo que ancla emocionalmente al pitch.
3. **Silueta + color (raro, especial)** — al estilo iPod silhouette campaign (2003): figura humana negra sobre fondo Bondi Blue saturado, energía pura. Reservar para momentos hero del pitch.

**Reglas:**

- **No stock photography genérica.** Si no hay foto real de ICESI, mejor ilustración minimalista que stock.
- **No personas sonriendo a cámara**. Personas pensando, conversando, trabajando — capturas reales.
- **Sin filtros, sin gradientes overlay, sin watermarks.**

### 4.5 Espacios, respiración y ritmo

- **Padding generoso.** El periodo Apple Ive respiraba — los productos en página tenían 60-80% de fondo blanco vacío.
- **Vertical rhythm** basado en múltiplos de 8px: 8, 16, 24, 32, 48, 64, 96.
- **Una idea por pantalla / slide / sección.** Esto es Steve Jobs Keynote 101.
- **Animaciones:** lentas, easing curves tipo `cubic-bezier(0.25, 0.1, 0.25, 1)` (Apple ease). Duración 240-320ms. No bouncy, no playful — *tranquilas*.

---

## 5. Aplicación práctica

### 5.1 Logo concept

Tres direcciones para explorar (no decididas, son propuestas):

1. **Cuerpo unificado** — un sólido que se forma por la unión de muchas pequeñas partes. Inspiración: el frontispicio de Leviatán de 1651, donde el rey está formado por cientos de personas pequeñas. Versión Ive: limpio, monocromo, una sola línea.

2. **Onda / agua** — una sola curva sinuosa que sugiere agua, contenido, contenedor. Más abstracto. Bondi Blue obligatorio.

3. **Marca verbal** — solo el wordmark "Leviatán" en New York o Apple Garamond, con un punto Bondi Blue después de la N. Como el logo "Think." en Mac of the 90s. Es la opción más restrained y la que más conversa con el periodo Ive temprano.

**Recomendación:** empezar por (3) — wordmark — para no comprometerse con un símbolo antes de tener producto. La marca crece con el sistema.

### 5.2 Pitch deck — principios

- **Una idea por slide. Máximo 7 palabras.** Si no cabe, son dos slides.
- **Fondo blanco infinito o carbon (#1D1D1F) puro.** Nada en el medio.
- **Tipografía display grande, generosa.** New York 56pt o más para frases-titular.
- **Imagen al 100% width, full bleed, sin borde.** Una imagen por slide.
- **Datos:** una métrica por slide, en grande. Tipo Steve Jobs Keynote 2007 ("**1.000 canciones en tu bolsillo**").

Estructura sugerida del deck para Piedrahita (12-15 slides máximo):

1. Frase de apertura (B&W). *"ICESI ya es número uno."*
2. Pausa. *"Falta la otra mitad."*
3. La otra mitad (un dato: 1 de 3 desertan en Colombia).
4. La promesa (Leviatán como cuerpo vivo).
5. Filosofía (la persona artificial de Hobbes — una sola imagen del frontispicio).
6. Los 4 órganos (Compañero, Co-piloto, Casa, Cuerpo Vivo).
7. Anclaje GPTW (UNAD está en top 10 — ICESI puede ser primera privada).
8. Roadmap (3 ventanas: 2027, 2028, 2029).
9. Métrica de victoria (deserción < 2%, GPTW certificación, Saber Pro líder).
10. Cierre. *"El alma mater no es metáfora."*
11. Tarjeta de contacto.

### 5.3 UI producto — principios

- **Layout:** sidebar 240px + main 800-1024px ancho + opcional inspector panel 320px. Total max 1600px ancho.
- **Modo claro y modo oscuro paritarios.** El modo oscuro NO es "color invertido" — es una paleta complementaria diseñada (Carbon de fondo, Aluminum 100 como divisores, Aluminum 700 como texto secundario, Bondi Blue mantiene su saturación).
- **Notifications:** sutiles, esquina superior derecha, fade in 200ms, fade out 200ms, sin sonidos por defecto.
- **Empty states:** una frase corta + un solo CTA, todo centrado, mucho aire alrededor.
- **Loading states:** un spinner mínimo, Bondi Blue, en el centro. No esqueletos animados (rompen la quietud).

---

## 6. Mood board referencial

**Productos para estudiar visualmente:**

- iMac G3 (1998) — Bondi Blue, translúcido, asa integrada.
- PowerMac G4 Cube (2000) — el cubo suspendido en plexiglás. Objeto-arte.
- iPod 1st gen (2001) — blanco puro, scroll wheel, una pantalla.
- iMac G4 "girasol" (2002) — domo blanco, brazo articulado, monitor flotante.
- Mac OS X Aqua 10.0 (2001) — botones tipo agua, transparencias.
- PowerMac G5 (2003) — aluminio cepillado, "cheesegrater" minimalista.
- iPhone 1st gen (2007) — cristal + aluminio + un solo botón.

**Campañas para estudiar:**

- *Think Different* (1997) — B&W de Einstein, Gandhi, Picasso, Dylan.
- *iPod silhouette* (2003-2008) — figura negra sobre fondo color saturado.
- *Get a Mac* (2006-2009) — fondo blanco infinito, dos personajes.
- *Switch* (2002) — testimonios sobre fondo blanco.

**Recursos:**

- [Apple Marketing Materials Archive — webarchive.org](https://web.archive.org)
- [The Apple Museum](https://www.apple.com/museum) (no oficial, fan-curated)
- *Designed by Apple in California* (libro, 2016) — antología visual del periodo Ive.
- *Jony Ive: The Genius Behind Apple's Greatest Products* (Leander Kahney, 2013).

---

## 7. Líneas rojas — qué evitar

- **No glassmorphism actual.** El glassmorphism 2020-2024 es la imitación cansada de Aqua, no es Aqua. Si se usa transparencia, que sea estructural (modal, overlay), no decorativa.
- **No neon, no gradientes vibrantes**, no "AI gradient" (purple → pink → blue). Eso es estética 2023 que se va a ver vieja en 2027.
- **No micro-interacciones playful** (bounces, springs, character animations). Leviatán es un sujeto institucional, no una mascot app.
- **No iconografía cute.** Ningún emoji, ningún personaje ilustrado, ningún animal mascota.
- **No skeumorfismo extremo de iOS 6 (cuero, papel, madera).** Eso fue Forstall, no Ive. Ive lideró la transición a iOS 7 flat precisamente para alejarse de eso.
- **No "Material Design".** Google ≠ Apple. Cards con elevación dramática, FAB buttons, color blocks vibrantes — todo eso es lenguaje Google, no Ive.
- **No dashboards con 12 widgets**. El cuerpo Leviatán muestra una cosa importante a la vez, no un panel de control de avión.

---

## 8. Próximos entregables

1. **Logotipo (wordmark) y favicon** — Bondi Blue + New York o Apple Garamond.
2. **Pitch deck v1** — 12 slides según estructura propuesta.
3. **Wireframes de las primeras 3 pantallas de Compañero** (concepto A): onboarding, dashboard del estudiante, escalamiento a humano.
4. **Sitio de marca (1 página)** — landing minimalista para introducir Leviatán.

Cada uno se aborda en sesión propia. No mezclar.
