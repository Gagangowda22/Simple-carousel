const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const imageWidth = document.querySelector("img").clientWidth;

let currentIndex = 0;
let carouselTimer;

nextBtn.addEventListener("click", () => {
  if (currentIndex === carousel.children.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = carousel.children.length - 1;
  } else {
    currentIndex--;
  }
  updateCarousel();
});

const updateCarousel = () => {
  const offset = -currentIndex * imageWidth;
  carousel.style.transform = `translate(${offset}px)`;

  clearTimeout(carouselTimer);

  carouselTimer = setTimeout(() => {
    if (currentIndex === carousel.children.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  }, 3000);
};

updateCarousel();
