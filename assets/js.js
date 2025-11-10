 // Mobile menu toggle
    document.getElementById('menu-btn').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });

    // Scroll animations
    function checkScroll() {
      const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    // Hero image slideshow
    const slides = [
      {
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop',
        title: 'Uw Hygiënisch Huis Onze Zorg',
        description: 'PProfessionele schoonmaakdiensten die uw ruimte transformeren. We gebruiken milieuvriendelijke producten en beproefde technieken voor een vlekkeloze omgeving.'
      },
      {
        image: 'assets/w3.jpg',
        title: 'Expert Schoonmaakdiensten',
        description: 'Onze getrainde specialisten leveren uitstekende resultaten voor zowel woningen als bedrijven.'
      },
      {
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&h=800&fit=crop',
        title: 'Milieuvriendelijke Schoonmaakoplossingen',
        description: 'We geven prioriteit aan uw gezondheid en het milieu met onze groene schoonmaakproducten en methoden.'
      }
    ];

    let currentSlide = 0;
    const slideImage = document.getElementById('slideImage');
    const slideTitle = document.getElementById('slideTitle');
    const slideDescription = document.getElementById('slideDescription');

    function changeSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      slideImage.style.backgroundImage = `url('${slides[currentSlide].image}')`;
      slideTitle.textContent = slides[currentSlide].title;
      slideDescription.textContent = slides[currentSlide].description;
    }

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);