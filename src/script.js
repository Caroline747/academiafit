    AOS.init({
      duration: 1000,
      once: true
    });

    // Navbar scroll & active section
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 90;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
          navLinks.forEach(link => link.classList.remove('active'));
          const currentLink = document.querySelector(`nav a[href="#${id}"]`);
          if(currentLink) currentLink.classList.add('active');
        }
      });
    });
