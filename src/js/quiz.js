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

// ------------------- Frases ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Cê achou mesmo que seria tão fácil assim ver a surpresa?",
    "Precisa passar por um teste antes...",
    "Está preparada?"
  ];

  const messageEl = document.getElementById("message");
  const messageContainer = document.getElementById("message-container");
  const quizContainer = document.getElementById("quiz-container");
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const feedbackEl = document.getElementById("quiz-feedback");

  const quiz = [
    {
      q: "Cê é mais alta que eu?",
      o: ["Sim", "Não"],
      c: "Não",
      f: ["Não se iluda ksksksks", "EXAtAMENTE HEHEHEHHEH"]
    },
    {
      q: "Renan já fez uma surpresa dessas antes?", 
      o: ["Sim", "Não"],
      c: "Não",
      f: ["Confiante demais, hein!", "Acertou de novo!"]
    },
    {
      q: "Depois dessa surpresa vou merecer uma dica?😔😔😔",
      o: ["Sim", "Não"],
      c: "Sim",
      f: ["Assim fico triste", "YEEEEEEEEEEE"]
    }
  ];

  let step = 0;

  //  -------------- Mostrar as mensagens iniciais ------------------

  const showMessages = () => {
    if (step < messages.length) {
      messageEl.classList.remove("show");
      setTimeout(() => {
        messageEl.textContent = messages[step++];
        messageEl.classList.add("show");
        setTimeout(showMessages, 2000);
      }, 500);
    } else {
      messageContainer.classList.add("d-none");
      quizContainer.classList.remove("d-none");
      step = 0;
      showQuestion();
    }
  };

  // -------------- Mostrar as questões do quiz ------------------

  const showQuestion = () => {
    const { q, o } = quiz[step];
    questionEl.textContent = q;
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";

    o.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-light fs-5 mb-2";
      btn.textContent = opt;
      btn.onclick = () => handleAnswer(opt);
      optionsEl.appendChild(btn);
    });
  };

  // -------------- Lidar com a resposta do usuário ------------------

const handleAnswer = (selected) => {
  const { c, f } = quiz[step];
  const correct = selected === c;

  const gif = correct
    ? `<img src="../src/assets/gifs/cat-jump.gif" alt="Acerto" style="width:150px; margin-top:10px;">`
    : step === 2
      ? `<img src="../src/assets/gifs/men-cry.gif" alt="Erro especial" style="width:150px; margin-top:10px;">`
      : `<img src="../src/assets/gifs/cat-wow.gif" alt="Erro padrão" style="width:150px; margin-top:10px;">`;

  feedbackEl.innerHTML = `
    <p class="mt-4 fw-bold ${correct ? "text-success" : "text-danger"}">${correct ? f[1] : f[0]}</p>
    ${gif}
  `;

  if (correct) {
    disableButtons();
    setTimeout(() => {
      step++;
      if (step < quiz.length) {
        showQuestion();
      } else {
        // Redireciona para outra página ao fim do quiz
        window.location.href = "../pages/central.html"; // Coloque aqui o destino desejado
      }
    }, 3000);
  }
};

// -------------- Desabilitar os botões após a resposta ------------------

  const disableButtons = () => {
    [...optionsEl.children].forEach(btn => (btn.disabled = true));
  };

  showMessages();
});

