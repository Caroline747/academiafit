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
  const alturaVal = document.getElementById("altura").value;
  const pesoVal = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  const alturaNum = parseFloat(alturaVal);
  const pesoNum = parseFloat(pesoVal);

  if (!isNaN(alturaNum) && alturaNum > 0 && !isNaN(pesoNum) && pesoNum > 0) {
    const alturaM = alturaNum / 100; // converte para metros
    const bmiNum = pesoNum / (alturaM * alturaM);
    const bmi = bmiNum.toFixed(2);

    let classificacao = "";
    if (bmiNum < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (bmiNum < 25) {
      classificacao = "Peso normal";
    } else if (bmiNum < 30) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    resultado.innerHTML = `Seu IMC é <b>${bmi}</b> (${classificacao})`;
  } else {
    resultado.innerHTML = "<span class='text-danger'>Preencha altura e peso corretamente.</span>";
  }
}

function filterFAQ() {
  const q = document.getElementById('faqSearch').value.toLowerCase().trim();
  const items = document.querySelectorAll('#faqAccordion .accordion-item');
  items.forEach(item => {
    const btn = item.querySelector('.accordion-button');
    const text = btn.textContent.toLowerCase();
    if (!q || text.includes(q)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
      // se estiver aberto, fechar
      const collapse = item.querySelector('.accordion-collapse');
      if (collapse.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    }
  });
}

function expandAllFAQ() {
  const collapses = document.querySelectorAll('#faqAccordion .accordion-collapse');
  collapses.forEach(c => bootstrap.Collapse.getOrCreateInstance(c).show());
}

function collapseAllFAQ() {
  const collapses = document.querySelectorAll('#faqAccordion .accordion-collapse');
  collapses.forEach(c => bootstrap.Collapse.getOrCreateInstance(c).hide());
}

// inicializar AOS (se estiver usando)
if (window.AOS) AOS.init();

