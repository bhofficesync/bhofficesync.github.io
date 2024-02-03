const images = [
  "mountain-4353332_1920.jpg",
  "mountain-magic-hour.jpg",
  "ocean-3605547_1280.jpg",
  "starry-sky-2051448_1280.jpg",
  "stars-1869447_1280.jpg",
];

const chosenImage = images[Math.round(Math.random() * (images.length - 1))];

const bgImage = document.querySelector(".backgroundCover");
bgImage.style.backgroundImage = `url('img/${chosenImage}')`;

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
