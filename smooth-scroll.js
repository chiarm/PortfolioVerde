/* ==========================================
   SMOOTH SCROLL RÁPIDO Y ÁGIL (LENIS)
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 0.7,       // Respuesta casi inmediata (pasa de 2.2s a 0.7s)
      easing: (t) => 1 - Math.pow(1 - t, 3), // Desaceleración cúbica ágil
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1, // Incrementa el recorrido por cada 'click' de la rueda
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
});