/**
 * Hero Role Dynamic Typewriter
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // 3. Hero Role Typewriter Animation
    (function initTypewriter() {
      const target = document.getElementById('hero-typing-target');
      if (!target) return;

      const roles = [
        'AI Engineer',
        'Multi-Agent Systems Architect',
        'Production Hybrid RAG Specialist',
        'LangGraph State Graph Engineer',
        'AI Engineer @ Spearsoft Tech Solutions'
      ];

      let roleIdx = 0;
      let charIdx = roles[0].length;
      let isDeleting = false;
      let typingSpeed = 90;

      function typeLoop() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
          charIdx--;
          target.textContent = currentRole.substring(0, charIdx);
          typingSpeed = 45;
        } else {
          charIdx++;
          target.textContent = currentRole.substring(0, charIdx);
          typingSpeed = 85;
        }

        if (!isDeleting && charIdx === currentRole.length) {
          typingSpeed = 2200;
          isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          typingSpeed = 400;
        }

        setTimeout(typeLoop, typingSpeed);
      }

      setTimeout(typeLoop, 1500);
    })();
})();
