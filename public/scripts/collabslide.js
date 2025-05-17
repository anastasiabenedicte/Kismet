const images = [
  "/img/collab_slide_0.webp",
  "/img/collab_slide_1.webp",
  "/img/collab_slide_2.webp",
  "/img/collab_slide_3.webp",
  "/img/collab_slide_4.webp",
  "/img/collab_slide_5.webp",
  "/img/collab_slide_6.webp",
  "/img/collab_slide_7.webp",
  "/img/collab_slide_8.webp",
  "/img/collab_slide_9.webp",
  "/img/collab_slide_10.webp",
  "/img/collab_slide_11.webp",
  "/img/collab_slide_12.webp",
  "/img/collab_slide_13.webp",
];


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