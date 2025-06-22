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

// ------------------ imagem virando ----------------------

  document.addEventListener("DOMContentLoaded", function () {
  const front = document.querySelector(".card-front");
  const back = document.querySelector(".card-back");

  const img = front.querySelector("img");
  img.onload = () => {
    const height = img.offsetHeight;
    front.style.height = height + "px";
    back.style.height = height + "px";
  };
});
// ------------------ animação de coração ----------------------

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.textContent = '❤️';

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300); // ajusta a frequência aqui