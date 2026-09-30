'use strict';
// The solid 360-degree phones are already in the HTML; no second hero download
// or delayed replacement is needed. Suspend rotation when it cannot be seen.
(() => {
  const scene = document.querySelector('.phone-stage');
  if (!scene) return;
  let inView = true;
  const update = () => scene.classList.toggle('motion-sleep', !inView || document.hidden);
  document.addEventListener('visibilitychange', update);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      update();
    });
    observer.observe(scene);
    window.addEventListener('pagehide', () => observer.disconnect());
    window.addEventListener('pageshow', () => observer.observe(scene));
  }
  update();
})();
