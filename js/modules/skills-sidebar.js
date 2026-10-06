/**
 * Skills Arsenal Dynamic Category Switcher
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // ==========================================================================
    // 2. TECH ARSENAL: Category Sidebar & 4-Column Numbered Cards
    // ==========================================================================
    const skillsStore = {
      agents: [
        { num: '01', name: 'LangGraph', icon: 'langgraph' },
        { num: '02', name: 'LangChain', icon: 'langchain' },
        { num: '03', name: 'LangSmith', icon: 'langsmith' },
        { num: '04', name: 'n8n Workflows', icon: 'n8n' },
        { num: '05', name: 'OpenAI GPT-4o', icon: 'openai' },
        { num: '06', name: 'Google Gemini', icon: 'gemini' },
        { num: '07', name: 'Mistral AI', icon: 'mistral' },
        { num: '08', name: 'Multi-Agent Graphs', icon: 'network' },
        { num: '09', name: 'Sequential Workflows', icon: 'workflow' },
        { num: '10', name: 'Cyclic State Graphs', icon: 'cyclic' },
        { num: '11', name: 'Tool Calling', icon: 'tools' },
        { num: '12', name: 'Prompt Engineering', icon: 'prompt' }
      ],
      rag: [
        { num: '01', name: 'Hybrid RAG', icon: 'bolt' },
        { num: '02', name: 'Pinecone Vector DB', icon: 'pinecone' },
        { num: '03', name: 'ChromaDB', icon: 'chroma' },
        { num: '04', name: 'FAISS', icon: 'faiss' },
        { num: '05', name: 'BM25 Keyword Search', icon: 'search' },
        { num: '06', name: 'Semantic Chunking', icon: 'chunking' },
        { num: '07', name: 'Cross-Encoders', icon: 'crossencoder' },
        { num: '08', name: 'Rerankers', icon: 'reranker' },
        { num: '09', name: 'Document Loaders', icon: 'docloader' },
        { num: '10', name: 'Dense Embeddings', icon: 'vector' },
        { num: '11', name: 'Context Optimization', icon: 'context' },
        { num: '12', name: 'Safety Guardrails', icon: 'shield' }
      ],
      ml: [
        { num: '01', name: 'Python 3.x', icon: 'python' },
        { num: '02', name: 'Scikit-learn', icon: 'scikit' },
        { num: '03', name: 'NumPy', icon: 'numpy' },
        { num: '04', name: 'Pandas', icon: 'pandas' },
        { num: '05', name: 'TensorFlow', icon: 'tensorflow' },
        { num: '06', name: 'Hugging Face', icon: 'huggingface' },
        { num: '07', name: 'NLP Transformers', icon: 'transformers' },
        { num: '08', name: 'Streamlit', icon: 'streamlit' },
        { num: '09', name: 'Regression Models', icon: 'chart' },
        { num: '10', name: 'Classification', icon: 'classification' },
        { num: '11', name: 'Matplotlib & Seaborn', icon: 'chart' },
        { num: '12', name: 'Model Evaluation', icon: 'evaluation' }
      ],
      tools: [
        { num: '01', name: 'Cursor (AI IDE)', icon: 'cursor' },
        { num: '02', name: 'Antigravity', icon: 'antigravity' },
        { num: '03', name: 'Claude Code', icon: 'claude' },
        { num: '04', name: 'LangSmith Traces', icon: 'langsmith' },
        { num: '05', name: 'Groq Cloud API', icon: 'groq' },
        { num: '06', name: 'Tavily Web Search', icon: 'tavily' },
        { num: '07', name: 'Git & GitHub CI', icon: 'github' },
        { num: '08', name: 'Hugging Face Spaces', icon: 'huggingface' },
        { num: '09', name: 'VS Code', icon: 'vscode' },
        { num: '10', name: 'Jupyter Lab', icon: 'jupyter' }
      ],
      data: [
        { num: '01', name: 'SQL (HackerRank 5★)', icon: 'sql' },
        { num: '02', name: 'Relational DBMS', icon: 'database' },
        { num: '03', name: 'Database Normalization', icon: 'normalization' },
        { num: '04', name: 'Query Optimization', icon: 'bolt' },
        { num: '05', name: 'RESTful APIs', icon: 'api' },
        { num: '06', name: 'Power BI', icon: 'powerbi' },
        { num: '07', name: 'Operating Systems', icon: 'cpu' },
        { num: '08', name: 'Data Structures', icon: 'tree' }
      ]
    };

    function getSkillIconHtml(icon) {
      switch(icon) {
        case 'cursor':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5l8.5 4.9v9.8L12 21.1l-8.5-4.9V6.4L12 1.5zm0 2.3L5.5 8.3 12 12.1l6.5-3.8L12 3.8zM4.7 9.8v6.7l6.3 3.6v-6.7L4.7 9.8zm14.6 0l-6.3 3.6v6.7l6.3-3.6V9.8z"/></svg>`;
        case 'antigravity':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.1-6.9l-2.8 2.8m-8.2 8.2l-2.8 2.8m0-13.8l2.8 2.8m8.2 8.2l2.8 2.8"/></svg>`;
        case 'claude':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2.5a1 1 0 0 0-1.8 0L9.4 7.6l-5.8.9a1 1 0 0 0-.6 1.7l4.2 4.1-1 5.8a1 1 0 0 0 1.5 1l5.2-2.7 5.2 2.7a1 1 0 0 0 1.5-1l-1-5.8 4.2-4.1a1 1 0 0 0-.6-1.7l-5.8-.9-2.8-5.1z"/></svg>`;
        case 'langgraph':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M8.5 7.5l4 7m3-7l-4 7m-3-7.5h7"/></svg>`;
        case 'langchain':
          return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
        case 'langsmith':
          return `<i class="fa-solid fa-crosshairs"></i>`;
        case 'n8n':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="7" r="3"/><circle cx="18" cy="17" r="3"/><path d="M9 12h6M15 12l2-4M15 12l2 4" stroke="currentColor" stroke-width="2"/></svg>`;
        case 'openai':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.28 9.37a5.98 5.98 0 0 0-.52-4.88 6.07 6.07 0 0 0-6.49-2.77A6.06 6.06 0 0 0 10.7 0a6.07 6.07 0 0 0-5.8 4.3 6.04 6.04 0 0 0-4.04 2.94 6.07 6.07 0 0 0 .74 6.84 5.98 5.98 0 0 0 .51 4.88 6.07 6.07 0 0 0 6.5 2.77A6.08 6.08 0 0 0 13.3 24a6.07 6.07 0 0 0 5.8-4.3 6.05 6.05 0 0 0 4.04-2.94 6.07 6.07 0 0 0-.86-7.39zm-8.98 13.2a4.57 4.57 0 0 1-2.83-.98l.14-.08 4.7-2.72a.77.77 0 0 0 .39-.67v-6.63l1.99 1.15v5.5a4.59 4.59 0 0 1-4.39 4.43zm-7.66-3.86a4.55 4.55 0 0 1-.62-2.93l.14.08 4.7 2.71a.76.76 0 0 0 .77 0l5.74-3.32v2.3l-4.76 2.75a4.59 4.59 0 0 1-6-.59zm-2.07-7.98a4.56 4.56 0 0 1 2.2-1.95v5.6a.76.76 0 0 0 .38.67l5.74 3.31-1.99 1.15-4.76-2.75a4.59 4.59 0 0 1-1.57-6.03zm14.34-1.78l-5.74-3.32 1.99-1.15 4.76 2.75a4.59 4.59 0 0 1 1.57 6.03 4.56 4.56 0 0 1-2.2 1.95v-5.6a.76.76 0 0 0-.38-.66zm2.84 4.86a4.55 4.55 0 0 1 .62 2.93l-.14-.08-4.7-2.72a.76.76 0 0 0-.77 0l-5.74 3.32v-2.3l4.76-2.75a4.59 4.59 0 0 1 6 .6zM10.7 8.58l-1.99-1.15 4.76-2.75a4.59 4.59 0 0 1 6.04.59 4.56 4.56 0 0 1 .63 2.93l-.14-.08-4.7-2.72a.76.76 0 0 0-.77 0L8.78 8.72v-.14zm-1.16 2.06l2.46-1.42 2.46 1.42v2.84l-2.46 1.42-2.46-1.42v-2.84z"/></svg>`;
        case 'gemini':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.627 12 12 0-6.373 5.373-12 12-12-6.627 0-12-5.373-12-12z"/></svg>`;
        case 'mistral':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 3h4v4H2V3zm16 0h4v4h-4V3zm-8 4h4v4h-4V7zM6 11h4v4H6v-4zm8 0h4v4h-4v-4zM2 15h4v4H2v-4zm16 0h4v4h-4v-4zm-8 4h4v4h-4v-4z"/></svg>`;
        case 'pinecone':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 8l3 3-4 4 9 7 9-7-4-4 3-3-8-6zm0 4.5l4 3-2 1.5 2 2-4 3.5-4-3.5 2-2-2-1.5 4-3z"/></svg>`;
        case 'chroma':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="12" cy="12" r="4"/></svg>`;
        case 'python':
          return `<i class="devicon-python-plain" style="font-size: 1.15rem;"></i>`;
        case 'scikit':
          return `<i class="fa-solid fa-circle-nodes"></i>`;
        case 'numpy':
          return `<i class="devicon-numpy-plain" style="font-size: 1.1rem;"></i>`;
        case 'pandas':
          return `<i class="devicon-pandas-plain" style="font-size: 1.1rem;"></i>`;
        case 'tensorflow':
          return `<i class="devicon-tensorflow-line" style="font-size: 1.15rem;"></i>`;
        case 'huggingface':
          return `<span style="font-size: 1.1rem; line-height: 1;">🤗</span>`;
        case 'streamlit':
          return `<i class="fa-solid fa-crown" style="color: #ff4b4b;"></i>`;
        case 'vscode':
          return `<i class="devicon-vscode-plain" style="font-size: 1.1rem;"></i>`;
        case 'jupyter':
          return `<i class="devicon-jupyter-plain" style="font-size: 1.1rem;"></i>`;
        case 'github':
          return `<i class="devicon-github-original" style="font-size: 1.15rem;"></i>`;
        case 'groq':
          return `<i class="fa-solid fa-bolt-lightning" style="color: var(--primary);"></i>`;
        case 'tavily':
          return `<i class="fa-solid fa-compass"></i>`;
        case 'sql':
        case 'database':
          return `<i class="fa-solid fa-database"></i>`;
        case 'powerbi':
          return `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="13" width="4" height="8" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="16" y="3" width="4" height="18" rx="1"/></svg>`;
        case 'network':
          return `<i class="fa-solid fa-network-wired"></i>`;
        case 'shield':
          return `<i class="fa-solid fa-shield-halved"></i>`;
        case 'bolt':
          return `<i class="fa-solid fa-bolt"></i>`;
        case 'search':
          return `<i class="fa-solid fa-magnifying-glass"></i>`;
        case 'chart':
          return `<i class="fa-solid fa-chart-line"></i>`;
        case 'cpu':
          return `<i class="fa-solid fa-microchip"></i>`;
        case 'tree':
          return `<i class="fa-solid fa-sitemap"></i>`;
        case 'api':
          return `<i class="fa-solid fa-cloud-arrow-up"></i>`;
        case 'workflow':
        case 'cyclic':
          return `<i class="fa-solid fa-arrows-spin"></i>`;
        case 'tools':
          return `<i class="fa-solid fa-screwdriver-wrench"></i>`;
        case 'prompt':
          return `<i class="fa-solid fa-terminal"></i>`;
        case 'transformers':
          return `<i class="fa-solid fa-brain"></i>`;
        case 'docloader':
          return `<i class="fa-solid fa-file-lines"></i>`;
        case 'vector':
        case 'chunking':
        case 'crossencoder':
        case 'reranker':
        case 'context':
        case 'faiss':
          return `<i class="fa-solid fa-cubes-stacked"></i>`;
        case 'classification':
        case 'evaluation':
        case 'normalization':
          return `<i class="fa-solid fa-diagram-project"></i>`;
        default:
          return `<i class="fa-solid fa-code"></i>`;
      }
    }

    const skillsGridBox = document.getElementById('skills-grid-box');
    const sidebarTabs = document.querySelectorAll('.sidebar-tab-btn');

    function displaySkills(categoryKey) {
      let skills = [];
      if (categoryKey === 'all') {
        let index = 1;
        ['agents', 'rag', 'ml', 'tools', 'data'].forEach(cat => {
          (skillsStore[cat] || []).forEach(s => {
            skills.push({
              num: String(index++).padStart(2, '0'),
              name: s.name,
              icon: s.icon
            });
          });
        });
      } else {
        skills = skillsStore[categoryKey] || skillsStore.agents;
      }

      skillsGridBox.innerHTML = '';
      skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'numbered-card';
        const iconHtml = getSkillIconHtml(skill.icon || 'code');
        div.innerHTML = `
          <div class="numbered-card-top">
            <span class="card-index">${skill.num}</span>
            <span class="card-app-icon">${iconHtml}</span>
          </div>
          <div class="skill-name">${skill.name}</div>
        `;
        skillsGridBox.appendChild(div);
      });
    }

    // Initialize with All Capabilities
    displaySkills('all');

    sidebarTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        sidebarTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        displaySkills(tab.dataset.category);
      });
    });
})();
