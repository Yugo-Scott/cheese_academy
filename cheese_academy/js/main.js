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

// 画像スライダー
  $('.image-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  // <!-- Dark Mode Switch -->
  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  const toggleIcon = document.getElementById('toggle-icon');

  // Dark Mode Styles
  function darkMode() {
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  }

  // Light Mode Styles
  function lightMode() {
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  }

  // Switch Theme Dynamically
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkMode();
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      lightMode()
      localStorage.setItem('theme', 'light');
    }
  }

  // Event Listener
  toggleSwitch.addEventListener('change', switchTheme, false);

  // Check Local Storage For Theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      darkMode();
    }
  }

  // Double heart click
  const heart = document.querySelectorAll('.heart');
  heart[0].addEventListener('dblclick', (e) => {
    console.log('click');
    createHeart(e);
  });

  function createHeart(e) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    const rect = e.currentTarget.getBoundingClientRect();
    heart.style.left = e.clientX - rect.left + 'px';
    heart.style.top = e.clientY - rect.top +1000 + 'px';
    e.currentTarget.appendChild(heart);
  }