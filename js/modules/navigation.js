/**
 * Navigation & Mobile Toggle
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  document.getElementById('copyright-year').textContent = new Date().getFullYear();

    // Nav Scroll Scrolled state
    const topNav = document.getElementById('top-nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        topNav.classList.add('scrolled');
      } else {
        topNav.classList.remove('scrolled');
      }
    });

    // Mobile Navigation Toggle & Hamburger Animation
    const mobileBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu-list');

    mobileBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileBtn.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link, .nav-mobile-action a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
})();
