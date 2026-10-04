/**
 * Contact Transmission Form AJAX & Mailto Dispatcher
 * Modular Script for prudhvikakkunuri.github.io
 */
(function() {
  'use strict';
  // 7. Interactive Transmission Form AJAX Dispatcher
    (function initTransmissionForm() {
      const contactForm = document.getElementById('portfolio-transmission-form');
      const transmitBtn = document.getElementById('btn-transmit');
      const feedbackAlert = document.getElementById('transmission-feedback');

      if (!contactForm) return;

      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btnOriginalHtml = transmitBtn.innerHTML;
        transmitBtn.disabled = true;
        transmitBtn.innerHTML = `<span>SENDING...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
        feedbackAlert.style.display = 'none';

        const formData = new FormData(contactForm);
        const nameVal = formData.get('name') || 'Anonymous';
        const emailVal = formData.get('email') || '';
        const messageVal = formData.get('message') || '';

        const payload = {
          name: nameVal,
          email: emailVal,
          message: messageVal,
          _subject: `New Message from Portfolio // ${nameVal}`
        };

        try {
          // If running locally as a file:// document
          if (window.location.protocol === 'file:') {
            const mailtoUrl = `mailto:prudhvi.kakkunuri@gmail.com?subject=${encodeURIComponent('Message from Portfolio // ' + nameVal)}&body=${encodeURIComponent('From: ' + nameVal + ' (' + emailVal + ')\n\nMessage:\n' + messageVal)}`;
            window.location.href = mailtoUrl;
            transmitBtn.innerHTML = `<span>OPENED EMAIL APP</span> <i class="fa-solid fa-envelope"></i>`;
            feedbackAlert.style.display = 'block';
            feedbackAlert.style.borderColor = 'var(--primary)';
            feedbackAlert.style.color = '#ffffff';
            feedbackAlert.innerHTML = `✓ Pre-filled in your email client! <em>(Local file preview cannot send background HTTP requests without a web server. Automated dispatch works on your live GitHub Pages domain once FormSubmit is activated).</em>`;
            setTimeout(() => {
              transmitBtn.disabled = false;
              transmitBtn.innerHTML = btnOriginalHtml;
            }, 6000);
            return;
          }

          const response = await fetch('https://formsubmit.co/ajax/prudhvi.kakkunuri@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          const data = await response.json();

          if (response.ok && data.success !== 'false' && data.success !== false) {
            transmitBtn.innerHTML = `<span>MESSAGE SENT</span> <i class="fa-solid fa-check"></i>`;
            feedbackAlert.style.display = 'block';
            feedbackAlert.style.borderColor = 'var(--border-lime)';
            feedbackAlert.style.color = 'var(--primary)';
            feedbackAlert.innerHTML = `✓ MESSAGE DELIVERED // DISPATCHED TO PRUDHVI'S INBOX DIRECTLY.`;
            contactForm.reset();
            setTimeout(() => {
              transmitBtn.disabled = false;
              transmitBtn.innerHTML = btnOriginalHtml;
            }, 4500);
          } else {
            throw new Error(data.message || 'FormSubmit response indicated failure');
          }
        } catch (err) {
          console.warn('FormSubmit dispatch fallback:', err);
          const mailtoFallback = `mailto:prudhvi.kakkunuri@gmail.com?subject=${encodeURIComponent('Message from Portfolio // ' + nameVal)}&body=${encodeURIComponent('From: ' + nameVal + ' (' + emailVal + ')\n\n' + messageVal)}`;
          transmitBtn.disabled = false;
          transmitBtn.innerHTML = btnOriginalHtml;
          feedbackAlert.style.display = 'block';
          feedbackAlert.style.borderColor = '#ff4500';
          feedbackAlert.style.color = '#ff9900';
          feedbackAlert.innerHTML = `⚠ ${err.message || 'Notice'}. <a href="${mailtoFallback}" style="color: #ffffff; text-decoration: underline; font-weight: 700;">CLICK HERE TO DISPATCH VIA EMAIL DIRECTLY</a>.`;
        }
      });
    })();
})();
