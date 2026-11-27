/* ============================================================
   LISTA DE VIDEOS DEL PORTAFOLIO
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar,
   añadir, quitar o reordenar videos.

   Cada video es un bloque { ... } con estos campos:

   marca      → nombre que aparece en la etiqueta rosada
   texto_en   → descripción en inglés (idioma con el que abre la página)
   texto_es   → descripción en español (se ve al pulsar el botón ES)
   archivo    → ruta del video .mp4 dentro de la carpeta videos/
   portada    → (opcional) imagen que se ve antes de darle play.
                Si la borras o la dejas en "", se usa
                automáticamente el primer cuadro del video.
   categorias → para los filtros. Usa una o varias de:
                "beauty", "lifestyle", "tech", "es"

   Los videos aparecen en la página en el mismo orden que aquí.
   No olvides la coma ( , ) entre un bloque y el siguiente.
   ============================================================ */

const VIDEO_SERVICIOS = {
  archivo: "videos/services.mp4",
  portada: "assets/img/poster-services.jpg"
};

const VIDEOS = [
  {
    marca: "IMPRESS NAILS",
    texto_en: "Problem - Solution + Demo",
    texto_es: "Problema - Solución + Demo",
    archivo: "videos/impress-nails.mp4",
    portada: "assets/img/poster-impress-nails.jpg",
    categorias: ["beauty"]
  },
  {
    marca: "PONDS",
    texto_en: "Skincare ritual",
    texto_es: "Rutina de skincare",
    archivo: "videos/ponds.mp4",
    portada: "assets/img/poster-ponds.jpg",
    categorias: ["beauty"]
  },
  {
    marca: "ESSENTIS",
    texto_en: "Demo",
    texto_es: "Demo",
    archivo: "videos/essentis.mp4",
    portada: "assets/img/poster-essentis.jpg",
    categorias: ["beauty"]
  },
  {
    marca: "ARENA",
    texto_en: "Wellness - Español",
    texto_es: "Bienestar - Español",
    archivo: "videos/arena.mp4",
    portada: "assets/img/poster-arena.jpg",
    categorias: ["lifestyle", "es"]
  },
  {
    marca: "MAYBELLINE NY",
    texto_en: "Product review",
    texto_es: "Reseña de producto",
    archivo: "videos/maybelline.mp4",
    portada: "assets/img/poster-maybelline.jpg",
    categorias: ["beauty"]
  },
  {
    marca: "10D",
    texto_en: "Tech / Unboxing",
    texto_es: "Tecnología / Unboxing",
    archivo: "videos/10d.mp4",
    portada: "assets/img/poster-10d.jpg",
    categorias: ["tech"]
  },
  {
    marca: "BRAVO",
    texto_en: "Recipe",
    texto_es: "Receta",
    archivo: "videos/bravo.mp4",
    portada: "assets/img/poster-bravo.jpg",
    categorias: ["lifestyle"]
  }
];
