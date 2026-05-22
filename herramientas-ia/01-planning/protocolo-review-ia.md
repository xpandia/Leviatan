# Protocolo de Review para Código Generado por IA

> Checklist fija de **5 puntos críticos** que se ejecuta antes de cada commit
> sobre código generado por IA. Si algún punto falla, el código no entra al
> repositorio hasta corregirlo.
>
> **Cómo usarla:** al cerrar la fase de Implementación del ciclo BPIR, recorre
> esta lista en orden. Marca cada checkbox solo después de haber verificado
> activamente — no asumas que la IA lo hizo bien.

---

## 1. Alucinaciones de librerías y APIs

**Pregunta clave:** ¿Ese `import` realmente existe y es la versión que digo?

**Qué revisar:**

- [ ] Cada `import` / `require` apunta a una librería que **existe en el registro oficial** (npm, PyPI, crates.io, etc.).
- [ ] La librería está **mantenida** (último release reciente, issues respondidos).
- [ ] La librería es **segura** (sin CVEs abiertos críticos).
- [ ] La **versión** declarada en el manifest (`package.json`, `requirements.txt`, etc.) es compatible con el entorno del proyecto.
- [ ] Las funciones / métodos llamados existen en esa versión específica (verificar en docs oficiales, no en memoria).

## 2. Lógica de negocio y matemática

**Pregunta clave:** ¿Los cálculos y reglas reflejan la realidad del negocio, no una versión "razonable" inventada por la IA?

**Qué revisar:**

- [ ] **Dinero / cantidades sensibles** no usan `float` — usan tipos decimales o enteros (centavos).
- [ ] **Redondeos** explícitos y consistentes (modo de redondeo definido, no por defecto).
- [ ] **Cálculos acumulativos** (sumas, promedios, totales) verificados con un caso conocido a mano.
- [ ] **Condiciones límite** cubiertas: input vacío, cero, negativos, máximos, fechas en bordes (fin de mes, año bisiesto, DST).
- [ ] **Casos edge** específicos del dominio listados en el brief están cubiertos.
- [ ] Las **reglas de negocio del brief** se reflejan en el código sin "interpretaciones" añadidas por la IA.

## 3. Seguridad

**Pregunta clave:** ¿El código aguanta input hostil y respeta el principio de menor privilegio?

**Qué revisar:**

- [ ] **Sin SQL injection:** todas las queries usan parámetros / prepared statements, nunca concatenación de strings.
- [ ] **Inputs validados** en el límite del sistema (tamaño, tipo, rango, formato).
- [ ] **Sin credenciales hardcoded** ni en código ni en logs (API keys, tokens, passwords, connection strings).
- [ ] **Autenticación y autorización** verificadas: el endpoint/función chequea quién es el caller y si tiene permiso para esta acción concreta.
- [ ] **Sin exposición de datos sensibles** en responses, errores o logs (PII, tokens, stack traces a usuarios finales).
- [ ] **Manejo de errores** no filtra detalles internos (paths, queries, versiones de librerías) en respuestas públicas.

## 4. Pérdida de contexto del brief

**Pregunta clave:** ¿La solución sigue cumpliendo todo lo que pedía el brief, o se desvió en el camino?

**Qué revisar:**

- [ ] **Todos los constraints** listados en el brief (§4) se respetan en el código entregado.
- [ ] La **estructura de input/output** coincide exactamente con la del brief (§3).
- [ ] No se introdujeron **dependencias externas** que el brief no autorizaba.
- [ ] No se tocaron **archivos fuera del scope** definido en el brief.
- [ ] La **Definition of Done** (§5 del brief) se cumple punto por punto — no "más o menos".
- [ ] Si la IA tomó decisiones no especificadas, están **documentadas** (en comentarios mínimos o en el PR), no escondidas.

## 5. Punto personalizable según el stack del proyecto

> Este punto cambia según el proyecto. Define **un** chequeo crítico para tu
> stack y déjalo fijo aquí. Ejemplos para escoger / inspirarse:

**Para proyectos con tests:**

- [ ] Los tests nuevos se ejecutan localmente y pasan (`<comando de test>`).
- [ ] La cobertura no bajó respecto a `main`.

**Para proyectos con datos sensibles / logs:**

- [ ] No se registran PII, tokens ni payloads completos en logs.
- [ ] Los logs nuevos respetan el nivel correcto (`debug` / `info` / `warn` / `error`).

**Para proyectos con arquitectura estricta:**

- [ ] El código respeta las capas / boundaries del proyecto (sin imports cruzados prohibidos).
- [ ] Las nuevas funciones/clases viven en el módulo correcto según la arquitectura.

**Para proyectos frontend:**

- [ ] No hay regresiones visuales en los flujos tocados (verificado en navegador real).
- [ ] Accesibilidad básica respetada (roles, labels, foco) en los componentes nuevos.

**Para proyectos con migraciones / DB:**

- [ ] La migración es reversible o tiene plan de rollback documentado.
- [ ] No hay operaciones destructivas (`DROP`, `DELETE` sin `WHERE`) sin confirmación explícita.

---

## Cierre del review

- [ ] Los 5 puntos anteriores fueron **ejecutados activamente**, no solo leídos.
- [ ] Si algún punto falló, se corrigió antes de hacer commit.
- [ ] El commit message describe la tarea del brief, no "código generado por IA".
