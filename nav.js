const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
  nav.classList.toggle('show');
  hamburger.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', function() {
  nav.classList.remove('show');
  hamburger.style.display = 'block';
  closeIcon.style.display = 'none';
});

// Hide navigation when a link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
    hamburger.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});