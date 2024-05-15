document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.topLeft .carousel');
  let currentIndex = 0;
  const totalImages = document.querySelectorAll('.topLeft .carousel-image').length;
  const imageWidth = document.querySelector('.topLeft .carousel-image').clientWidth;

  function slideNext() {
    currentIndex = (currentIndex + 1) % totalImages;
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  setInterval(slideNext, 3000); // Troca de imagem a cada 3 segundos
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
  }

  setInterval(showNextImage, 3000); // Troca de imagem a cada 3 segundos
});
