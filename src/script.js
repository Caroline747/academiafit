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

function calcularBMI() {
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (altura > 0 && peso > 0) {
    const alturaM = altura / 100; // converte para metros
    const bmi = (peso / (alturaM * alturaM)).toFixed(2);

    let classificacao = "";
    if (bmi < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (bmi < 24.9) {
      classificacao = "Peso normal";
    } else if (bmi < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    resultado.innerHTML = `Seu IMC é <b>${bmi}</b> (${classificacao})`;
  } else {
    resultado.innerHTML = "<span class='text-danger'>Preencha altura e peso corretamente.</span>";
  }
}
