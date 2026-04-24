const backArrow = document.querySelector(".back");
const forwardArrow = document.querySelector(".forward");
const displayedImage = document.querySelector(".image1");

const images = [];
for (let i = 1; i <= 30; i++) {
  images.push(`Assets/Gallery-${i}.webp`);
}

let currentIndex = 0;

backArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayedImage.src = images[currentIndex];
});

forwardArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  displayedImage.src = images[currentIndex];
});
