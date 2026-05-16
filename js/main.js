// ===== Theme Toggle =====
(function() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// ===== Mobile Menu =====
(function() {
  const menuBtn = document.getElementById('mobileMenu');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
})();

// ===== Load Blog Preview on Homepage =====
(function() {
  const blogGrid = document.getElementById('blogPreview');
  if (!blogGrid) return;

  fetch('/blog/posts.json')
    .then(r => r.json())
    .then(posts => {
      // Show 2 most recent posts
      const recent = posts.slice(0, 2);
      blogGrid.innerHTML = recent.map(post => `
        <a href="/blog/${post.file}" class="blog-card fade-in">
          <div class="blog-card-meta">
            <span class="blog-card-category">${post.category}</span>
            <span>${post.date}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <div class="blog-card-tags">
            ${post.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </a>
      `).join('');
    })
    .catch(err => {
      blogGrid.innerHTML = '<p style="color:var(--text-secondary)">暂无文章</p>';
    });
})();

// ===== Intersection Observer for scroll animations =====
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-1, .fade-in-delay-2').forEach(el => {
    // Pause animations initially if they're not in view
    const style = window.getComputedStyle(el);
    if (style.opacity === '0') {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    }
  });
})();

// ===== Navbar scroll effect =====
(function() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  }, { passive: true });
})();
