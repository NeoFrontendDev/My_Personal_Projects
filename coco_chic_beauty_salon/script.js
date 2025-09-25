document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navlinks a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const menuToggle = document.getElementById('menu-toggle');
  const navLinksMenu = document.getElementById('navlinks');

  menuToggle.addEventListener('click', () => {
    navLinksMenu.classList.toggle('show');
  });
});

window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero p');
    heroText.computedStyleMap.opacity = 0;
    heroText.computedStyleMap.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        heroText.computedStyleMap.opacity = 1;
    }, 500);
});

const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', (e) => {
    const email = contactForm.email.value;
    if (!email.includes('@')) {
        alert('Please enter valid email address.');
        e.preventDefault();
    }
});

const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.textContent = 'Top';
Object.assign(topBtn.style, {
    display: 'none',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    background: '#a01861',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
});
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});