/**
 * Scroll Progress Bar Indicator
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // ==========================================================================
    // 4. ANIMATION SUITE SCRIPTS
    // ==========================================================================

    // 1. Reading Scroll Progress Bar
    const scrollProgressBar = document.getElementById('scroll-progress');
    function updateScrollProgress() {
      const docElem = document.documentElement;
      const totalHeight = docElem.scrollHeight - docElem.clientHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        if (scrollProgressBar) {
          scrollProgressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
        }
      }
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
})();
