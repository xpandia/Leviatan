# CLAUDE.md — Leviatan

App **Next.js**. ⚠️ El código de la app vive en la subcarpeta **`web/`**, NO en la raíz del repo.

## Cómo correr en local
```
cd web
npm install      # si node_modules no está
npm run dev       # http://localhost:3000
```
Scripts (en `web/`): `dev`, `build`, `start`.

## Stack
- Next.js + React + TypeScript (dentro de `web/`).
- `herramientas-ia/` en la raíz del repo = tooling interno (no es la app).

## Estructura (dentro de `web/app/`)
- App Router con `components/`, `lib/`, y `deck/`.
- `deck/` → **presentación de 12 slides** (motor "Book" con layout de deck; usado p. ej. para la reunión Piedrahita).

## Deploy
Producción: **leviatan.xpandia.co** (Vercel; el *root directory* del proyecto apunta a `web/`).

## Notas
- Trabaja siempre dentro de `web/`.
- Al momento no usa variables de entorno ni base de datos.
