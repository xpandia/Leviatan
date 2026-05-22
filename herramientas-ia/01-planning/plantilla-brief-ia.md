# Plantilla Maestra de Briefs para IA

> Molde reutilizable para delegar tareas complejas a la IA dentro del ciclo BPIR
> (Brief → Plan → Implementación → Review).
>
> **Cómo usarla:** copia este archivo, renómbralo con el nombre de la tarea
> (`brief-<slug-de-la-tarea>.md`) y completa cada sección. No borres los
> encabezados aunque no apliquen — escribe explícitamente "No aplica" para
> dejar constancia de que se consideró.

---

## 1. Título de la tarea

<!-- Una línea, en imperativo. Ej: "Agregar endpoint de exportación de pedidos a CSV" -->

## 2. Contexto

### 2.1 Sistema actual / entorno

<!--
Describe el sistema en el que se va a trabajar:
- Stack principal (lenguaje, framework, base de datos, servicios externos).
- Módulo o servicio específico que se va a tocar.
- Estado actual del código relevante (qué hace hoy, dónde vive).
-->

### 2.2 Problema a resolver

<!--
¿Qué duele hoy? ¿Qué no se puede hacer o se hace mal?
Describe el problema, no la solución.
-->

### 2.3 Objetivo concreto de la tarea

<!--
¿Cuál es el resultado esperado al terminar esta tarea?
Una frase clara y verificable.
-->

## 3. Requerimientos técnicos

- **Lenguaje / runtime:**
- **Framework / librerías base:**
- **Patrones o arquitectura a seguir:** <!-- ej: clean architecture, repository pattern, hooks, etc. -->
- **Estructura de input esperada:** <!-- shape, tipos, validaciones -->
- **Estructura de output esperada:** <!-- shape, tipos, formato -->
- **Integraciones necesarias:** <!-- APIs, servicios, colas, etc. -->
- **Archivos / módulos que se deben tocar:**
- **Archivos / módulos que NO se deben tocar:**

## 4. Constraints

Lo que la IA **no debe** hacer o los estándares que **debe** respetar.

- [ ] Uso obligatorio de type hints / tipos estáticos.
- [ ] Inclusión de tests automatizados para el código nuevo.
- [ ] Cumplimiento del linter / formatter del proyecto.
- [ ] No introducir nuevas dependencias externas sin justificación explícita.
- [ ] Respetar la convención de naming del proyecto.
- [ ] No tocar archivos fuera del scope listado en §3.
- [ ] Otros constraints específicos:
  - <!-- ej: "No usar floats para montos de dinero, usar Decimal" -->
  - <!-- ej: "No registrar PII en logs" -->

## 5. Definition of Done

Criterios verificables para considerar la tarea terminada.

- [ ] **Tests:** <!-- qué tests deben pasar; comando exacto si aplica -->
- [ ] **Performance mínima:** <!-- ej: "endpoint < 200ms p95 con N=1000" -->
- [ ] **Requisitos funcionales comprobables:**
  - <!-- ej: "Al hacer POST /x con payload Y, responde 201 y persiste Z" -->
- [ ] **Formato de salida esperado:** <!-- shape exacto del response/output -->
- [ ] **Documentación actualizada:** <!-- README, OpenAPI, comentarios donde aplique -->
- [ ] **Protocolo de Review IA ejecutado** (ver `protocolo-review-ia.md`) antes del commit.

---

## Notas para quien completa el brief

- Si una sección queda vacía, la IA la inventará. Mejor escribir "No aplica
  porque X" que dejar el campo en blanco.
- Si el contexto es muy largo, prioriza: qué existe hoy, qué cambia, qué no
  debe cambiar.
- Los constraints son el lugar donde se previenen los errores más comunes.
  Invierte tiempo aquí.
