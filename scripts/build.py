# Build script to assemble index.html from components and assets
import os

HEAD_TEMPLATE = '''<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary SEO Meta Tags -->
  <title>Prudhvi Kakkunuri | AI Engineer & Multi-Agent Systems Architect</title>
  <meta name="title" content="Prudhvi Kakkunuri | AI Engineer & Multi-Agent Systems Architect">
  <meta name="description" content="Portfolio of Prudhvi Kakkunuri — AI Engineer specializing in Autonomous Multi-Agent Workflows, LangGraph orchestration, Hybrid RAG pipelines, Vector Databases, and production LLMs.">
  <meta name="keywords" content="Prudhvi Kakkunuri, AI Engineer, Multi-Agent Systems, LangGraph, LangChain, Hybrid RAG, Pinecone, ChromaDB, Python, SQL, Hyderabad, Machine Learning">
  <meta name="author" content="Prudhvi Kakkunuri">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#050505">
  <link rel="canonical" href="https://prudhvikakkunuri.github.io/">

  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://prudhvikakkunuri.github.io/">
  <meta property="og:title" content="Prudhvi Kakkunuri | AI Engineer & Multi-Agent Systems Architect">
  <meta property="og:description" content="Architecting autonomous agent systems, LangGraph workflows, and production hybrid RAG pipelines.">
  <meta property="og:image" content="https://github.com/prudhvikakkunuri/prudhvikakkunuri.github.io/blob/main/image.png?raw=true">

  <!-- Twitter Meta -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://prudhvikakkunuri.github.io/">
  <meta property="twitter:title" content="Prudhvi Kakkunuri | AI Engineer & Multi-Agent Systems Architect">
  <meta property="twitter:description" content="Architecting autonomous agent systems, LangGraph workflows, and production hybrid RAG pipelines.">
  <meta property="twitter:image" content="https://github.com/prudhvikakkunuri/prudhvikakkunuri.github.io/blob/main/image.png?raw=true">

  <!-- Structured Data JSON-LD for Search Engines -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prudhvi Kakkunuri",
    "url": "https://prudhvikakkunuri.github.io/",
    "image": "https://github.com/prudhvikakkunuri/prudhvikakkunuri.github.io/blob/main/image.png?raw=true",
    "jobTitle": "AI Engineer & Multi-Agent Systems Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Spearsoft Tech Solutions"
    },
    "description": "AI Engineer at Spearsoft Tech Solutions building multi-agent systems with LangGraph, hybrid RAG with Pinecone, and production-grade LLM applications.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Aurora's Scientific and Technological Institute"
    },
    "sameAs": [
      "https://www.linkedin.com/in/prudhvi-k-387257222",
      "https://github.com/prudhvikakkunuri",
      "https://www.hackerrank.com/profile/prudhvi28",
      "https://leetcode.com/u/prudhvi_28/"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Autonomous Multi-Agent Systems",
      "LangGraph",
      "LangChain",
      "Hybrid RAG",
      "Vector Databases",
      "Pinecone",
      "Python",
      "SQL",
      "Machine Learning"
    ]
  }
  </script>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="./favicon.png" onerror="this.href='https://github.com/prudhvikakkunuri/prudhvikakkunuri.github.io/blob/main/favicon.png?raw=true'">

  <!-- Typography: Syne + Space Grotesk + JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800;900&display=swap" rel="stylesheet">

  <!-- FontAwesome 6 & Devicon Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

  <!-- Modular Master Stylesheet -->
  <link rel="stylesheet" href="css/main.css">
</head>
<body>

  <!-- Top Scroll Progress Indicator -->
  <div id="scroll-progress"></div>

  <!-- Neural Constellation Background Canvas -->
  <canvas id="neural-canvas"></canvas>

  <!-- Scanlines & Cyber Grid -->
  <div class="scanlines" aria-hidden="true"></div>
'''

FOOTER_SCRIPTS = '''
  <!-- Modular Interactive Application Scripts -->
  <script src="js/modules/navigation.js"></script>
  <script src="js/modules/canvas-bg.js"></script>
  <script src="js/modules/scroll-progress.js"></script>
  <script src="js/modules/hero-typewriter.js"></script>
  <script src="js/modules/work-filter.js"></script>
  <script src="js/modules/skills-sidebar.js"></script>
  <script src="js/modules/command-palette.js"></script>
  <script src="js/modules/stats-counter.js"></script>
  <script src="js/modules/card-spotlight.js"></script>
  <script src="js/modules/scroll-reveal.js"></script>
  <script src="js/modules/contact-form.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
'''

def read_comp(name):
    path = os.path.join(os.path.dirname(__file__), '..', 'components', name)
    with open(path, 'r', encoding='utf-8') as f:
        return f.read().strip()

def build_index():
    navbar = read_comp('navbar.html')
    hero = read_comp('hero.html')
    stats = read_comp('stats.html')
    work = read_comp('work.html')
    skills = read_comp('skills.html')
    about = read_comp('about.html')
    career = read_comp('career.html')
    contact = read_comp('contact.html')
    modal = read_comp('modal.html')
    footer = read_comp('footer.html')

    body_content = f'''{HEAD_TEMPLATE}
  <!-- Navigation Header Component -->
  {navbar}

  <!-- Main Content Layout -->
  <main>
    <!-- Hero Component -->
    {hero}

    <!-- Stats Strip Component -->
    {stats}

    <!-- Work / Featured Projects Component -->
    {work}

    <!-- Technical Arsenal / Skills Component -->
    {skills}

    <!-- About Me / Profile Component -->
    {about}

    <!-- Career & Experience Component -->
    {career}

    <!-- Contact & Collaboration Component -->
    {contact}
  </main>

  <!-- Command Palette Modal Component -->
  {modal}

  <!-- Footer Component -->
  {footer}
{FOOTER_SCRIPTS}'''

    target = os.path.join(os.path.dirname(__file__), '..', 'index.html')
    with open(target, 'w', encoding='utf-8') as f:
        f.write(body_content)
    print('index.html successfully generated!')

if __name__ == '__main__':
    build_index()
