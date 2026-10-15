document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("goals-container");

  const goalsAnim = lottie.loadAnimation({
    container: container,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "assets/animations/goals.json", // Percorso del tuo file
  });

  container.addEventListener("mouseenter", () => {
    goalsAnim.setDirection(1); // Play in avanti
    goalsAnim.play();
  });

  container.addEventListener("mouseleave", () => {
    goalsAnim.setDirection(-1); // Rewind
    goalsAnim.play();
  });
});
/* INIZIALIZZAZIONE LOTTIE - PAGINA GOALS */
const goalsLottieContainer = document.getElementById("goals-lottie");

if (goalsLottieContainer) {
  lottie.loadAnimation({
    container: goalsLottieContainer,
    renderer: "svg",
    loop: true /* Cambia in 'false' se vuoi che l'animazione si fermi dopo un giro */,
    autoplay: true,
    path: "assets/animations/goals-anim-2.json" /* <-- Inserisci qui il nome esatto del tuo file .json */,
  });
}
/* AUTOPLAY SLIDER PROGETTI CARTACEI */
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  let currentSlide = 0;

  // Cambia immagine ogni 3.5 secondi (3500 millisecondi)
  setInterval(() => {
    // Togli la classe attiva alla slide corrente
    slides[currentSlide].classList.remove("active");

    // Passa alla prossima slide (e torna alla prima se sei all'ultima)
    currentSlide = (currentSlide + 1) % slides.length;

    // Aggiungi la classe attiva alla nuova slide
    slides[currentSlide].classList.add("active");
  }, 3500);
}
