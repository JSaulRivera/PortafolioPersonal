/* ========================= */
/* THEME TOGGLE */
/* ========================= */

const themeButton = document.getElementById('theme-toggle');


themeButton.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {

    themeButton.innerHTML = '☀️';

  } else {

    themeButton.innerHTML = '🌙';

  }

});


/* ========================= */
/* CARD GLOW EFFECT */
/* ========================= */

const cards = document.querySelectorAll(
  '.skill-card, .timeline-content, .featured-project, .dashboard-card'
);


cards.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(59,130,246,0.16),
        rgba(15,23,42,0.88) 45%
      )
    `;

  });


  card.addEventListener('mouseleave', () => {

    // card.style.background = 'rgba(15,23,42,0.78)';
    card.style.background = '';

  });

});


/* ========================= */
/* SCROLL ANIMATION */
/* ========================= */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add('show');

    }

  });

}, {
  threshold: 0.15
});


const hiddenElements = document.querySelectorAll(
  '.skill-card, .timeline-item, .featured-project, .dashboard-card'
);


hiddenElements.forEach((el) => {

  el.classList.add('hidden');

  observer.observe(el);

});



///
const counters = document.querySelectorAll('[data-target]');

const startCounter = (counter) => {

  const target = parseInt(counter.dataset.target);
  const showPlus = counter.dataset.plus === "true";
  let count = 0;

  const increment = target / 60;

  const update = () => {

    count += increment;

    if (count < target) {

      counter.innerText = Math.ceil(count);

      requestAnimationFrame(update);

    } else {

      counter.innerText = showPlus ? `+${target}` : target;

    }

  };

  update();

};



const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      startCounter(entry.target);

      counterObserver.unobserve(entry.target);

    }

  });

});

counters.forEach(counter => {

  counterObserver.observe(counter);

});







const items = document.querySelectorAll(".project-list li");
const projects = document.querySelectorAll(".project-content");

items.forEach(item => {

  item.addEventListener("click", () => {

    const id = item.dataset.project;
    const project = document.getElementById(id);

    items.forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
    if (project.classList.contains("active")) {
      project.classList.remove("active");
      item.classList.remove("selected");
    } else {

      projects.forEach(p => {
        p.classList.remove("active");
        
      });

      project.classList.add("active");
    }

  });

});




const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }else{
        menuToggle.innerHTML = "☰";
    }

});


document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuToggle.innerHTML="☰";

    });

});

