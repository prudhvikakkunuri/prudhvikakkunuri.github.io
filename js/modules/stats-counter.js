/**
 * Animated Numerical Stats Counter
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // 6. Animated Stats Counter
    (function initStatsCounter() {
      const statsSection = document.querySelector('.stats-strip');
      if (!statsSection) return;

      let hasAnimated = false;
      const statBoxes = document.querySelectorAll('.stat-giant-num');
      const statsData = [
        { el: statBoxes[0], target: 10, suffix: '+' },
        { el: statBoxes[1], target: 200, suffix: '+' },
        { el: statBoxes[2], target: 200, suffix: '+' },
        { el: statBoxes[3], target: 5, suffix: '★' }
      ];

      function animateValue(item, duration) {
        if (!item.el) return;
        const end = item.target;
        const startTime = performance.now();

        function step(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeProgress * end);
          item.el.innerHTML = `${current}<span>${item.suffix}</span>`;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            item.el.innerHTML = `${end}<span>${item.suffix}</span>`;
          }
        }
        requestAnimationFrame(step);
      }

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statsData.forEach((item, idx) => {
            setTimeout(() => animateValue(item, 1200), idx * 100);
          });
        }
      }, { threshold: 0.2 });

      observer.observe(statsSection);
    })();
})();
