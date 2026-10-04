/**
 * Neural Constellation Background Canvas
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // 2. Interactive Neural Constellation Background Canvas
    (function initNeuralCanvas() {
      const canvas = document.getElementById('neural-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let width, height;
      let nodes = [];
      const nodeCount = window.innerWidth < 768 ? 22 : 44;
      const maxDist = 135;
      let mouse = { x: -1000, y: -1000 };

      function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }, { passive: true });

      window.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
      });

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.42,
          vy: (Math.random() - 0.5) * 0.42,
          radius: Math.random() * 1.5 + 1
        });
      }

      function animateCanvas() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < nodes.length; i++) {
          const p = nodes[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;

          // Mouse attraction / repel effect
          const dxMouse = mouse.x - p.x;
          const dyMouse = mouse.y - p.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);
          if (distMouse < 140) {
            const force = (140 - distMouse) / 140;
            p.x -= (dxMouse / distMouse) * force * 1.2;
            p.y -= (dyMouse / distMouse) * force * 1.2;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 107, 0, ${(1 - distMouse / 140) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 107, 0, 0.7)';
          ctx.fill();

          // Inter-node connections
          for (let j = i + 1; j < nodes.length; j++) {
            const p2 = nodes[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 107, 0, ${alpha})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animateCanvas);
      }
      requestAnimationFrame(animateCanvas);
    })();
})();
