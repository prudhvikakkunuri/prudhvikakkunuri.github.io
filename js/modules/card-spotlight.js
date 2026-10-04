/**
 * Interactive Card Cursor Spotlight Tracking
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // 4. Interactive Card Spotlight Cursor Tracking
    (function initCardSpotlights() {
      const cards = document.querySelectorAll('.work-card, .career-card, .cred-item-box, .channel-card, .hero-terminal-card, .stat-strip-box, .about-profile-card, .transmission-box-wrapper');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
        card.addEventListener('mouseleave', () => {
          card.style.setProperty('--mouse-x', `-500px`);
          card.style.setProperty('--mouse-y', `-500px`);
        });
      });
    })();
})();
