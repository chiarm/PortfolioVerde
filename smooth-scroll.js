document.addEventListener('DOMContentLoaded', () => {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      lerp: 0.2,
      wheelMultiplier: 1,
      smoothWheel: true,
      sync: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // Bucle optimizado con control de tiempo nativo
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
});