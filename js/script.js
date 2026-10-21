const goalsContainer = document.getElementById("goals-container");

if (goalsContainer) {
  const isMobile = window.innerWidth <= 768;

  let animazioneGoals = lottie.loadAnimation({
    container: goalsContainer,
    renderer: "svg",
    loop: true,
    autoplay: isMobile,
    path: "assets/animations/goals.json",
  });

  if (!isMobile) {
    goalsContainer.addEventListener("mouseenter", () => {
      animazioneGoals.play();
    });

    goalsContainer.addEventListener("mouseleave", () => {
      animazioneGoals.stop();
      animazioneGoals.goToAndStop(0, true);
    });
  }
}
const goalsLottieContainer = document.getElementById("goals-lottie");

if (goalsLottieContainer) {
  lottie.loadAnimation({
    container: goalsLottieContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/animations/goals-anim-2.json",
  });
}

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }, 3500);
}

const toggleRadarBtn = document.getElementById("toggle-radar-btn");
const radarContainer = document.getElementById("radar-box");

if (toggleRadarBtn && radarContainer) {
  toggleRadarBtn.addEventListener("click", () => {
    radarContainer.classList.toggle("is-active");

    if (radarContainer.classList.contains("is-active")) {
      toggleRadarBtn.textContent = "Nascondi le mie skill";
      toggleRadarBtn.style.backgroundColor = "#666";
    } else {
      toggleRadarBtn.textContent = "Mostra le mie skill";
      toggleRadarBtn.style.backgroundColor = "#000";
    }
  });
}
