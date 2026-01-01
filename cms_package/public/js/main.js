// FastMode Website JavaScript

// Form handling for CMS
document.querySelectorAll('form[data-form-name]').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formName = form.dataset.formName || 'general';
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Submit button state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }
    
    try {
      const response = await fetch('/_forms/' + formName, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        form.reset();
        const successMessage = form.dataset.successMessage || 'Thank you! Your message has been sent.';
        alert(successMessage);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      alert('Sorry, there was an error. Please try again.');
    } finally {
      if (submitBtn) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile navigation toggle (if needed)
const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Add loaded class to body for animations
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

