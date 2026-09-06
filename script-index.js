const carruseles = document.querySelectorAll(".posters");

console.log(carruseles);

carruseles.forEach((poster) => {
  const carousel = poster.querySelector(".carousel");

  const anterior = poster.querySelector(".anterior");
  const siguiente = poster.querySelector(".siguiente");

  console.log(carousel);
  console.log(anterior);
  console.log(siguiente);

  siguiente.addEventListener("click", () => {
    carousel.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  });

  anterior.addEventListener("click", () => {
    carousel.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  });
});
