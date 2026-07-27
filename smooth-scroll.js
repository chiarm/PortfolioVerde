/* ==========================================
   SMOOTH SCROLL SIN TIRONES (USANDO LERP)
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      lerp: 0.15,          // La clave de la velocidad: 0.1 es suave, 0.2 es muy rápido y reactivo
      smoothWheel: true,
      wheelMultiplier: 1,  // Multiplicador neutro para evitar saltos
      touchMultiplier: 2,
      infinite: false,
    });

    // Sincronización con la tasa de refresco de tu monitor (evita el temblor)
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
});