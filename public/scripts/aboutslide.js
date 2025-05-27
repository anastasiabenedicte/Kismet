const images = ["/img/about-1.webp", "/img/about-2.webp", "/img/about-3.webp"];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  const slideImg = document.querySelector("#slide-img");
  const nextBtn = document.querySelector("#next-btn");
  const prevBtn = document.querySelector("#prev-btn");

  if (!slideImg || !nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImg.src = images[currentIndex];
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slideImg.src = images[currentIndex];
  });
});
