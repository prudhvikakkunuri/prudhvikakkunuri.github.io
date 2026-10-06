/**
 * Work Index Search & Filter
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // ==========================================================================
    // 1. WORK INDEX: Real-time Search Database & Category Pills
    // ==========================================================================
    const dbSearchInput = document.getElementById('db-search');
    const filterPills = document.querySelectorAll('.filter-pill');
    const workCards = document.querySelectorAll('.work-card');

    let activeFilter = 'all';

    function runDatabaseSearch() {
      const query = dbSearchInput.value.toLowerCase().trim();

      workCards.forEach(card => {
        const categoryString = (card.dataset.category || '').toLowerCase();
        const categories = categoryString.split(/\s+/).filter(Boolean);
        const keywords = (card.dataset.keywords || '').toLowerCase();
        const title = card.querySelector('.work-card-title').textContent.toLowerCase();
        const desc = card.querySelector('.work-card-desc').textContent.toLowerCase();

        const matchesCategory = (activeFilter === 'all' || categories.includes(activeFilter));
        const matchesQuery = query === '' || keywords.includes(query) || title.includes(query) || desc.includes(query);

        if (matchesCategory && matchesQuery) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilter = pill.dataset.filter;
        runDatabaseSearch();
      });
    });

    dbSearchInput.addEventListener('input', runDatabaseSearch);
})();
