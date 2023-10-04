 const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const target = e.target.getAttribute('href');
  const offset = document.querySelector(target).offsetTop;

  window.scroll({
    top: offset,
    behavior: 'smooth'
  });
}