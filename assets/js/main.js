function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

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
      if (introContent) {
        if (url === '/' || url === '') {
          introContent.style.display = 'block';
        } else {
          introContent.style.display = 'none';
        }
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
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }

    // CV download functionality
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
      cvLink.addEventListener('click', function(e) {
        e.preventDefault();
        const cvUrl = this.getAttribute('href');
        if (cvUrl) {
          window.open(cvUrl, '_blank');
        } else {
          console.error('CV URL is not set');
        }
      });
    }

    // Check for saved theme preference or default to dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});
