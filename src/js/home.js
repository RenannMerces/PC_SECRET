particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: "#ff66cc" },
    shape: { type: "circle" },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff99cc",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});


    document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();

    const heart = document.getElementById('heart-transition');
    heart.classList.add('active');

    // Aguarda a animação mais longa (1.8s) antes de redirecionar
    setTimeout(() => {
      window.location.href = 'pages/quiz.html';
    }, 1000);
  });
