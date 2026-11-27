# Karla García · UGC Portfolio

Sitio estático (HTML + CSS + JS, sin dependencias) listo para GitHub Pages.

## Estructura
```
index.html          ← la página
videos.js           ← LISTA DE VIDEOS (edita aquí)
assets/img/         ← fotos, miniaturas de videos, estrellas, favicon
assets/fonts/       ← tipografías (incluidas, no depende de Google Fonts)
videos/             ← los videos .mp4
```

## Videos: cómo cambiarlos, añadirlos o quitarlos

Todo se controla desde **`videos.js`**. No hace falta tocar `index.html`.

### Opción A — Reemplazar un video (la más fácil)
Sube el nuevo video a `videos/` con **el mismo nombre** que el anterior (por ejemplo `videos/ponds.mp4`).
GitHub reemplaza el archivo y la página lo usa automáticamente.
Si la portada vieja ya no corresponde, abre `videos.js` y deja `portada: ""` en ese video: así se mostrará el primer cuadro del video nuevo.

### Opción B — Añadir un video nuevo
1. Sube el `.mp4` a la carpeta `videos/` (ej. `videos/nueva-marca.mp4`).
2. (Opcional) Sube una imagen de portada a `assets/img/`.
3. En `videos.js`, copia un bloque `{ ... },` y cambia marca, textos, archivo y categorías.

### Opción C — Quitar o reordenar
En `videos.js` borra el bloque de ese video o muévelo de lugar. Los videos aparecen en el mismo orden que en la lista.

### Formato recomendado
- **MP4 (H.264)**, vertical 9:16, idealmente **720p y menos de 10 MB**.
- Los `.mov` del iPhone (HEVC) **no se reproducen** en muchos navegadores, como Chrome en Windows. Conviértelos antes a MP4 con
  HandBrake (gratis, preset "Fast 720p30") o CloudConvert. Otra opción: en el iPhone, *Ajustes → Cámara → Formatos → Más compatible*.
- GitHub no acepta archivos de más de 100 MB.

### Estado actual
| Marca         | Archivo                    |
|---------------|----------------------------|
| Servicios     | `videos/services.mp4` ✅   |
| Impress Nails | `videos/impress-nails.mp4` ✅ |
| Ponds         | `videos/ponds.mp4` ✅      |
| Essentis      | `videos/essentis.mp4` ✅   |
| Arena         | `videos/arena.mp4` ✅      |
| Maybelline NY | `videos/maybelline.mp4` ✅ |
| 10D           | `videos/10d.mp4` ✅        |
| Bravo         | `videos/bravo.mp4` ✅      |

### Editar un archivo directamente en GitHub
Abre el archivo en tu repositorio (ej. `videos.js`), pulsa el ícono del lápiz ✏️, haz los cambios y pulsa *Commit changes*.
Para subir videos: entra a la carpeta `videos/` → *Add file → Upload files*. La página se actualiza en 1 o 2 minutos.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub (por ejemplo `portfolio`).
2. Sube **el contenido** de esta carpeta (no la carpeta en sí): *Add file → Upload files*, arrastra todo y pulsa *Commit*.
3. Ve a *Settings → Pages* y, en *Build and deployment*, elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio estará en `https://TU-USUARIO.github.io/portfolio/`.
5. (Opcional) Dominio propio: en la misma pantalla, escribe tu dominio en *Custom domain*.

## Editar textos
Los textos de las tarjetas de video están en `videos.js`. El resto de los textos en inglés está en `index.html`. Las traducciones al español están en el bloque `const ES = {...}` al final del archivo.
