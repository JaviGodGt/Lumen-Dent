# Lumen Dental (demo de desarrollo web)

Landing page de una clínica dental ficticia, hecha con Next.js (App Router) y TypeScript. Sirve como ejemplo de "Desarrollo web: sitios corporativos y landing pages".

Incluye un módulo de reserva de cita que funciona en el navegador (servicio, día, hora y nombre). Es solo una demostración: no guarda datos ni envía correos.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Publicar en Vercel

1. Sube la carpeta a un repositorio de GitHub.
2. En Vercel, elige **Add New > Project** e importa el repositorio.
3. Deja la configuración por defecto (Vercel detecta Next.js) y pulsa **Deploy**.

Cada `git push` a la rama principal vuelve a publicar el sitio.

## Estructura

- `app/page.tsx`: contenido de la página.
- `app/BookingCard.tsx`: módulo de reserva (componente de cliente).
- `app/globals.css`: estilos y colores (variables al inicio del archivo).
- `app/layout.tsx`: idioma, título y fuente (Bricolage Grotesque, incluida en el proyecto).
