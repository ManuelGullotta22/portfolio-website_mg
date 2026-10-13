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
