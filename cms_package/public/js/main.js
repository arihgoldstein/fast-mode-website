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

// Mobile navigation toggle with animations
(function() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const topBar = document.getElementById('hamburger-top');
  const midBar = document.getElementById('hamburger-mid');
  const botBar = document.getElementById('hamburger-bot');
  
  if (!btn || !menu) return;
  
  let isOpen = false;
  
  function toggleMenu() {
    isOpen = !isOpen;
    btn.setAttribute('aria-expanded', isOpen);
    
    if (isOpen) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.style.opacity = '1';
      // Translate first, then rotate for proper X formation
      if (topBar) topBar.style.transform = 'translateY(6px) rotate(45deg)';
      if (midBar) midBar.style.opacity = '0';
      if (botBar) botBar.style.transform = 'translateY(-6px) rotate(-45deg)';
      btn.classList.add('bg-white/10', 'text-white');
    } else {
      menu.style.maxHeight = '0';
      menu.style.opacity = '0';
      if (topBar) topBar.style.transform = 'translateY(0) rotate(0)';
      if (midBar) midBar.style.opacity = '1';
      if (botBar) botBar.style.transform = 'translateY(0) rotate(0)';
      btn.classList.remove('bg-white/10', 'text-white');
    }
  }
  
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (isOpen && !menu.contains(e.target) && !btn.contains(e.target)) {
      toggleMenu();
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) {
      toggleMenu();
    }
  });
  
  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (isOpen) {
        toggleMenu();
      }
    });
  });
})();

// Add loaded class to body for animations
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Scroll-triggered reveal animations using IntersectionObserver
(function() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealElements.forEach(el => {
      el.classList.add('revealed');
      el.style.opacity = '1';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
})();

// Navbar background enhancement on scroll
(function() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          nav.style.borderBottomColor = 'rgba(99, 102, 241, 0.15)';
          nav.style.backdropFilter = 'blur(20px)';
        } else {
          nav.style.borderBottomColor = '';
          nav.style.backdropFilter = '';
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();

