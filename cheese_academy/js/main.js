// jsを記述する際はここに記載していく
document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('.main-nav-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});