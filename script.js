//codigo para el scroll cambie de color dependiendo de donde este
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.content > section');
  const navLinks = document.querySelectorAll('.sidebar nav ul li a');

  sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index].classList.add('active');
      }
  });
});
// codigo para el texto que se borra y escribe solo
const textElement = document.querySelector(".text");

function setText(text) {
    textElement.textContent = text;
}

const phrases = [
    "¡Gracias por visitar mi página web!",
    "Aquí puedes encontrar información sobre mí y mi trabajo."
];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const textToDisplay = isDeleting
        ? currentPhrase.slice(0, letterIndex - 1)
        : currentPhrase.slice(0, letterIndex + 1);

    setText(textToDisplay);

    if (!isDeleting && textToDisplay === currentPhrase) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && textToDisplay === "") {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        const typeSpeed = isDeleting ? 75 : 150;
        setTimeout(type, typeSpeed);
    }

    letterIndex = isDeleting ? letterIndex - 1 : letterIndex + 1;
}

// Iniciar la animación de escritura
setTimeout(type, 1000);
// Iniciar la animación de escritura
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainers = document.querySelectorAll(".carousel-container");

  carouselContainers.forEach((container) => {
    const slides = container.querySelectorAll(".slide");
    const descriptions = container.querySelectorAll(".description");
    let currentSlide = 0;
    let intervalId;

    function showSlide(slideIndex) {
      slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
      });
      descriptions.forEach((desc, index) => {
        desc.style.display = index === slideIndex ? "block" : "none";
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function startCarousel() {
      intervalId = setInterval(nextSlide, 10000);
    }

    container.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      clearInterval(intervalId);
      startCarousel();
    });

    showSlide(currentSlide);
    startCarousel();
  });
});
