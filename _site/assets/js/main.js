document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('page-content');
    const introContent = document.getElementById('intro-content');
    const navLinks = document.querySelectorAll('nav ul li a');

    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const newDoc = parser.parseFromString(html, 'text/html');
          mainContent.innerHTML = newDoc.getElementById('page-content').innerHTML;
          document.title = newDoc.title;
          updateActiveLink(url);
          toggleIntroContent(url);
        });
    }

    function updateActiveLink(url) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === url) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    function toggleIntroContent(url) {
      if (url === '/' || url === '') {
        introContent.style.display = 'block';
      } else {
        introContent.style.display = 'none';
      }
    }

    document.body.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.host === window.location.host) {
        e.preventDefault();
        const newPath = e.target.getAttribute('href');
        history.pushState(null, '', newPath);
        loadContent(newPath);
      }
    });

    // Handle back/forward browser buttons
    window.addEventListener('popstate', function() {
      loadContent(window.location.pathname);
    });

    // Load initial content
    loadContent(window.location.pathname);

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    function setTheme(theme) {
      htmlElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });

    // Check for saved theme preference or default to dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});