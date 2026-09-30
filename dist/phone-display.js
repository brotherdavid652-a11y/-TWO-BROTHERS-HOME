'use strict';
// Dimensional CSS geometry: separate front/back textures and solid metal edges.
// Side faces remain visible when the screen turns edge-on.
const phoneScene = document.querySelector('.phone-stage');
function buildPhoneDisplay() {
  phoneScene.replaceChildren();
  for (let index = 0; index < 2; index++) {
    const phone = document.createElement('div');
    phone.className = `phone-model phone-model-${index}`;
    phone.setAttribute('role', 'img');
    phone.setAttribute('aria-label', 'Rotating burgundy iPhone illustration with a visible screen, rear, and metal sides');
    for (let depth = -5; depth <= 5; depth++) {
      const shell = document.createElement('span');
      shell.className = 'phone-shell';
      shell.style.transform = `translateZ(${depth}px)`;
      shell.setAttribute('aria-hidden', 'true');
      phone.append(shell);
    }
    for (const side of ['left', 'right', 'top', 'bottom']) {
      const edge = document.createElement('span');
      edge.className = `phone-edge phone-edge-${side}`;
      edge.setAttribute('aria-hidden', 'true');
      phone.append(edge);
    }
    for (const face of ['front', 'back']) {
      const panel = document.createElement('span');
      panel.className = `phone-face phone-face-${face}`;
      panel.setAttribute('aria-hidden', 'true');
      const texture = document.createElement('img');
      texture.src = 'assets/phone-burgundy-realistic.png';
      texture.alt = '';
      texture.draggable = false;
      panel.append(texture);
      phone.append(panel);
      if (face === 'back') {
        // The camera plateau protrudes above the rear housing.
        for (let depth = 7; depth <= 9; depth++) {
          const camera = panel.cloneNode(true);
          camera.classList.add('phone-camera');
          camera.style.transform = `rotateY(180deg) translateZ(${depth}px)`;
          phone.append(camera);
        }
      }
    }
    phoneScene.append(phone);
  }
  // Suspend animation while off-screen or in a hidden tab, without a visible control.
  let inView = true;
  function updatePlayback() {
    phoneScene.classList.toggle('motion-sleep', !inView || document.hidden);
  }
  document.addEventListener('visibilitychange', updatePlayback);
  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      updatePlayback();
    });
    visibility.observe(phoneScene);
    window.addEventListener('pagehide', () => visibility.disconnect(), { once: true });
    window.addEventListener('pageshow', () => visibility.observe(phoneScene));
  }
  updatePlayback();
}
if (phoneScene) {
  const atlas = new Image();
  atlas.onload = buildPhoneDisplay;
  // Keep the existing campaign image if the dimensional texture cannot load.
  atlas.src = 'assets/phone-burgundy-realistic.png';
}
