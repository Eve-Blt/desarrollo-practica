console.log("Javascript conectado");

const cards = document.querySelectorAll(".card-pelicula");

console.log(cards);

const overlay = document.querySelector("#overlay");

console.log(overlay);

const cerrarOverlay = document.querySelector("#cerrar-overlay");

const detalleTitulo = document.querySelector("#detalle-titulo");

const detalleGenero = document.querySelector("#detalle-genero");

const detalleSinopsis = document.querySelector("#detalle-sinopsis");

const detalleInfo = document.querySelector("#detalle-info");

const detalleRating = document.querySelector("#detalle-rating");

const botonComentariosDetalle = document.querySelector(
  "#btn-comentarios-detalle",
);

const overlayComentarios = document.querySelector("#overlay-comentarios");

const cerrarComentarios = document.querySelector("#cerrar-comentarios");

const comentariosTitulo = document.querySelector("#comentarios-titulo");

const botonesComentarios = document.querySelectorAll(".btn-comentarios");

const peliculas = {
  CaseriadeBrujas: {
    titulo: "Caseria de Brujas",
    genero: "Suspenso psicológico, Thriller, Crimen",
    sinopsis:
      "Una profesora universitaria se encuentra en una encrucijada personal y profesional cuando una alumna estrella encara una acusación contra una de sus compañeras y un oscuro secreto de su propio pasado amenaza con salir a la luz.",
    info: "⭐ 5.6",
    comentarios: 24,
  },

  LaSustancia: {
    titulo: "La Sustancia",
    genero: "Horror corporal, Horror psicológico",
    sinopsis:
      "La trama sigue a Elisabeth Sparkle, una famosa actriz en decadencia que consume un producto clandestino para crear una versión más joven y perfecta de sí misma, lo que desencadena graves consecuencias",
    info: "⭐ 7.2",
    comentarios: 31,
  },

  ElTemplodelosHuesos: {
    titulo: "El templo de los Huesos",
    genero: "Terror zombie, Horror psicológico,Thriller",
    sinopsis:
      "Continuación de 28 años después. El Dr. Kelson se ve envuelto en una nueva y sorprendente relación, cuyas consecuencias podrían cambiar el mundo tal y como lo conocen, y el encuentro de Spike con Jimmy Crystal se convierte en una pesadilla de la que no puede escapar. En el mundo de The Bone Temple, los infectados ya no son la mayor amenaza para la supervivencia: la inhumanidad de los supervivientes puede ser aún más extraña y aterradora.",
    info: "⭐ 7.2",
    comentarios: 18,
  },

  HombreLobo: {
    titulo: "Hombre Lobo",
    genero: "Terror, Horror corporal, Ciencia ficción",
    sinopsis:
      " La trama sigue a un hombre de familia que busca proteger a su esposa e hija de un hombre lobo, solo para infectarse y transformarse lentamente en la criatura",
    info: "⭐ 5.6",
    comentarios: 11,
  },
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("hice click en una card");

    const peliculaSeleccionada = card.dataset.pelicula;

    const pelicula = peliculas[peliculaSeleccionada];

    detalleTitulo.textContent = pelicula.titulo;
    detalleGenero.textContent = pelicula.genero;
    detalleSinopsis.textContent = pelicula.sinopsis;

    detalleRating.textContent = pelicula.info;

    botonComentariosDetalle.textContent = `💬 ${pelicula.comentarios}`;
    botonComentariosDetalle.dataset.pelicula = peliculaSeleccionada;

    overlay.style.display = "flex";
  });
});

cerrarOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

botonComentariosDetalle.addEventListener("click", () => {
  const peliculaSeleccionada = botonComentariosDetalle.dataset.pelicula;
  const pelicula = peliculas[peliculaSeleccionada];

  comentariosTitulo.textContent = pelicula.titulo;

  overlay.style.display = "none";

  overlayComentarios.style.display = "flex";
});

botonesComentarios.forEach((boton) => {
  boton.addEventListener("click", (event) => {
    event.stopPropagation();

    const peliculaSeleccionada = boton.dataset.pelicula;

    const pelicula = peliculas[peliculaSeleccionada];

    comentariosTitulo.textContent = pelicula.titulo;

    overlayComentarios.style.display = "flex";
  });
});

cerrarComentarios.addEventListener("click", () => {
  overlayComentarios.style.display = "none";
});
