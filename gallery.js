const backArrow = document.querySelector(".back");
const forwardArrow = document.querySelector(".forward");
const displayedImage = document.querySelector(".image1");
const slideshow = document.querySelector(".image-slideshow");

const images = [];
for (let i = 1; i <= 30; i++) {
  images.push(`Assets/Gallery-${i}.webp`);
}

let currentIndex = 0;

const updateSlide = () => {
  const currentSrc = images[currentIndex];
  displayedImage.src = currentSrc;
  slideshow.style.setProperty("--slide-image", `url('${currentSrc}')`);
};

backArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
});

forwardArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
});

updateSlide();
