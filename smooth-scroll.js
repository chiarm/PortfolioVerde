/* ==========================================
   SMOOTH SCROLL SIN PAUSAS NI RETARDOS
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      lerp: 0.2,           // Un valor más alto hace que responda al instante (puedes subirlo a 0.25 si lo quieres más inmediato)
      wheelMultiplier: 1,  
      smoothWheel: true,
      sync: true,          // Fuerza la sincronización inmediata con el hilo principal del navegador (elimina la pausa)
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
});