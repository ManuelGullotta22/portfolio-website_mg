// Seleziona il contenitore dell'animazione
const goalsContainer = document.getElementById('goals-container');

if (goalsContainer) {
  // Controlla se siamo su mobile (schermo <= 768px)
  const isMobile = window.innerWidth <= 768;

  // Carica l'animazione
  let animazioneGoals = lottie.loadAnimation({
    container: goalsContainer,
    renderer: 'svg',
    loop: true,
    autoplay: isMobile, // Se è mobile è TRUE (parte subito), se è PC è FALSE (ferma)
    path: 'assets/animations/goals.json' // IMPORTANTE: inserisci il percorso corretto del tuo file JSON
  });

  // Se siamo su PC (non mobile), aggiungiamo l'effetto Hover
  if (!isMobile) {
    goalsContainer.addEventListener('mouseenter', () => {
      animazioneGoals.play();
    });
    
    goalsContainer.addEventListener('mouseleave', () => {
      animazioneGoals.stop(); 
      // Opzionale: se vuoi che torni al primo frame quando togli il mouse, de-commenta la riga sotto
      // animazioneGoals.goToAndStop(0, true);
    });
  }
}
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
// --- LOGICA BOTTONE RADAR MOBILE (GOALS) ---
const toggleRadarBtn = document.getElementById('toggle-radar-btn');
const radarContainer = document.getElementById('radar-box'); 

if (toggleRadarBtn && radarContainer) {
  toggleRadarBtn.addEventListener('click', () => {
    // Aggiunge o toglie la classe "is-active" ad ogni click
    radarContainer.classList.toggle('is-active');

    if (radarContainer.classList.contains('is-active')) {
      toggleRadarBtn.textContent = 'Nascondi le mie skill';
      toggleRadarBtn.style.backgroundColor = '#666';
    } else {
      toggleRadarBtn.textContent = 'Mostra le mie skill';
      toggleRadarBtn.style.backgroundColor = '#000';
    }
  });
}