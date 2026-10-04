/**
 * Scroll Reveal Intersection Observer
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // 5. Scroll Reveal Intersection Observer
    (function initScrollReveal() {
      const revealElements = document.querySelectorAll('.work-card, .career-card, .cred-item-box, .channel-card, .stat-strip-box, .arsenal-top-row, .collab-transmission-box, .about-profile-card, .about-content-column, .srish-collab-left, .transmission-box-wrapper');
      
      revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
      });

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    })();
})();
