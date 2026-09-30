'use strict';
// Progressive enhancement: content remains visible if motion is unavailable.
(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;
  const seen = new WeakSet();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      if (!preference.matches) {
        entry.target.classList.add('motion-reveal');
        entry.target.addEventListener('animationend', event => {
          if (event.animationName === 'rise-in') entry.target.classList.remove('motion-reveal');
        }, { once: true });
      }
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  function observeContent() {
    document.querySelectorAll('.product, .facts > div, .buying-grid > div, .store-grid > article, .faq > h2').forEach((node, index) => {
      if (seen.has(node)) return;
      seen.add(node);
      node.style.setProperty('--reveal-delay', `${(index % 4) * 45}ms`);
      observer.observe(node);
    });
  }
  observeContent();
  const updates = new MutationObserver(observeContent);
  updates.observe(document.getElementById('products'), { childList: true });
  preference.addEventListener('change', () => {
    if (preference.matches) {
      observer.disconnect();
      updates.disconnect();
    }
  });
  window.addEventListener('pagehide', () => {
    observer.disconnect();
    updates.disconnect();
  }, { once: true });
})();
