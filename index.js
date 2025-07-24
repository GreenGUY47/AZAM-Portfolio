// index.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.toggle-mode');

  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
});
// index.js

document.addEventListener('DOMContentLoaded', () => {
  // Hero Text Animation
  const heroText = document.querySelector('.hero-text');
  heroText.style.opacity = '0';
  heroText.style.transform = 'translateY(40px)';
  heroText.style.transition = 'all 1.2s ease-out';

  setTimeout(() => {
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
  }, 400);

  // Image Float Animation
  const heroImage = document.querySelector('.hero-image img');
  heroImage.style.transition = 'transform 1.5s ease-in-out';
  setInterval(() => {
    heroImage.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      heroImage.style.transform = 'translateY(10px)';
    }, 750);
  }, 1500);

  // Scroll Animation Reveal
  const revealSections = document.querySelectorAll('section');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'all 1s ease-out';
      } else {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // 🔁 Animated Hover for Main Buttons (NO GLOW)
  const mainButtons = document.querySelectorAll('.btn');
  mainButtons.forEach(btn => {
    btn.style.transition = 'transform 0.3s ease, border 0.3s ease';

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05) translateY(-3px)';
      btn.style.borderBottom = '2px solid #facc15';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1) translateY(0)';
      btn.style.borderBottom = 'none';
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
<script>
  const password = prompt("Enter password to view this site:");
  if(password !== "Azam") {
    alert("Wrong password!");
    window.location.href = "https://example.com"; // or close tab
  }
</script>
