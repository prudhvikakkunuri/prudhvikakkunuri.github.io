/**
 * Command Palette (CMD+K) Search Modal
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // ==========================================================================
    // 3. Command Palette Modal (CMD + K)
    // ==========================================================================
    const cmdBackdrop = document.getElementById('cmd-modal');
    const cmdTrigger = document.getElementById('cmd-btn');
    const cmdExit = document.getElementById('cmd-exit');
    const cmdInputField = document.getElementById('cmd-search-field');
    const cmdResultsView = document.getElementById('cmd-results-view');

    const searchDirectory = [
      { title: 'Enterprise Knowledge Assistant (Hybrid RAG)', type: 'Project', link: 'https://prudhvikakkunuri.github.io/Enterprise-Knowledge-Assistant-using-Hybrid-RAG', external: true },
      { title: 'Multi-Agent Research Assistant', type: 'Project', link: 'https://prudhvikakkunuri.github.io/Multi-Agent-Research-Assistant/', external: true },
      { title: 'RAG Book Assistant', type: 'Project', link: 'https://prudhvikakkunuri.github.io/RAG-Book-Assistant/', external: true },
      { title: 'Academic Multi-RAG Assistant', type: 'Project', link: 'https://prudhvikakkunuri.github.io/AI-Powered-Academic-Assistant-Using-Conditional-Workflow/', external: true },
      { title: 'AI Blog Writer Agent', type: 'Project', link: 'https://prudhvikakkunuri.github.io/AI-Blog-Writer-Agent/', external: true },
      { title: 'AI LinkedIn Post Generator', type: 'Project', link: 'https://prudhvikakkunuri.github.io/LinkedIN-Post-Generator/', external: true },
      { title: 'Zomato AI Chatbot', type: 'Project', link: 'https://prudhvikakkunuri.github.io/Zomato-AI-Chatbot/', external: true },
      { title: 'AI Legal Assistant', type: 'Project', link: 'https://prudhvikakkunuri.github.io/AI-Legal-Assistant/', external: true },
      { title: 'AI Budget & Financial Advisor', type: 'Project', link: 'https://prudhvikakkunuri.github.io/AI-Budget-and-Financial-Advisor/', external: true },
      { title: 'Swiggy Delivery Time Prediction', type: 'Project', link: 'https://huggingface.co/spaces/prudhvi28x/Swiggy-Delivery-Time_Prediction', external: true },
      { title: 'Featured Projects (Portfolio)', type: 'Section', link: '#work' },
      { title: 'Technical Stack (Skills)', type: 'Section', link: '#skills' },
      { title: 'About Me (Subject Profile)', type: 'Section', link: '#about' },
      { title: 'AI Engineer @ Spearsoft Tech Solutions', type: 'Experience', link: '#career' },
      { title: 'Cursor (AI IDE)', type: 'Skill', link: '#skills' },
      { title: 'Antigravity (Agentic AI)', type: 'Skill', link: '#skills' },
      { title: 'Claude Code (Anthropic)', type: 'Skill', link: '#skills' },
      { title: 'Experience & Education', type: 'Section', link: '#career' },
      { title: 'Certifications & Badges', type: 'Section', link: '#credentials' },
      { title: 'Get In Touch (Contact)', type: 'Section', link: '#contact' },
      { title: 'Download CV / Resume (PDF)', type: 'Action', link: 'https://drive.google.com/file/d/1UydFiSt9DUqhniJ17_6dq7yjhHlTw2qB/view?usp=drivesdk', external: true }
    ];

    function showCmdResults(query = '') {
      const q = query.toLowerCase().trim();
      const filtered = q === '' 
        ? searchDirectory 
        : searchDirectory.filter(item => item.title.toLowerCase().includes(q) || item.type.toLowerCase().includes(q));

      cmdResultsView.innerHTML = '';
      filtered.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cmd-result-entry' + (index === 0 ? ' selected' : '');
        let typeIcon = '<i class="fa-solid fa-arrow-turn-down-right" style="color: var(--text-dim); margin-right: 8px;"></i>';
        if (item.type === 'Project') typeIcon = '<i class="fa-solid fa-code-branch" style="color: var(--primary); margin-right: 8px;"></i>';
        else if (item.type === 'Skill') typeIcon = '<i class="fa-solid fa-microchip" style="color: var(--primary); margin-right: 8px;"></i>';
        else if (item.type === 'Experience') typeIcon = '<i class="fa-solid fa-briefcase" style="color: var(--primary); margin-right: 8px;"></i>';
        else if (item.type === 'Action') typeIcon = '<i class="fa-solid fa-file-arrow-down" style="color: var(--primary); margin-right: 8px;"></i>';

        li.innerHTML = `
          <span>${typeIcon}${item.title}</span>
          <span style="font-size: 0.72rem; color: var(--primary); background: rgba(255, 107, 0, 0.12); padding: 2px 6px;">[${item.type.toUpperCase()}]</span>
        `;
        li.addEventListener('click', () => {
          if (item.external) {
            window.open(item.link, '_blank');
          } else {
            window.location.hash = item.link;
          }
          closeCmdPalette();
        });
        cmdResultsView.appendChild(li);
      });
    }

    function openCmdPalette() {
      cmdBackdrop.classList.add('active');
      cmdInputField.value = '';
      showCmdResults('');
      setTimeout(() => cmdInputField.focus(), 50);
    }

    function closeCmdPalette() {
      cmdBackdrop.classList.remove('active');
    }

    cmdTrigger.addEventListener('click', openCmdPalette);
    cmdExit.addEventListener('click', closeCmdPalette);

    cmdBackdrop.addEventListener('click', (e) => {
      if (e.target === cmdBackdrop) closeCmdPalette();
    });

    cmdInputField.addEventListener('input', (e) => {
      showCmdResults(e.target.value);
    });

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (cmdBackdrop.classList.contains('active')) {
          closeCmdPalette();
        } else {
          openCmdPalette();
        }
      }
      if (e.key === 'Escape' && cmdBackdrop.classList.contains('active')) {
        closeCmdPalette();
      }
    });

    // Copy to clipboard utility with toast
    const toast = document.getElementById('copy-toast');
    let toastTimer;

    function copyContact(text, message) {
      navigator.clipboard.writeText(text).then(() => {
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 2200);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    }
})();
