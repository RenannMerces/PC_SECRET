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
    "Você achou mesmo que seria tão fácil assim ver a surpresa?",
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
      q: "Lizza é mais alta que Renan?",
      o: ["Sim", "Não"],
      c: "Não",
      f: ["Não se iluda em ksksksks", "Isso mesmo, hahaha"]
    },
    {
      q: "Renan já fez uma surpresa dessas antes?",
      o: ["Sim", "Não"],
      c: "Não",
      f: ["Confiante demais, hein!", "Acertou de novo!"]
    },
    {
      q: "Lizza prefere doce ou salgado?",
      o: ["Doce", "Salgado"],
      c: "Doce",
      f: ["Tenta outra vez... não, pera, já errou 😅", "Adoçou a resposta!"]
    }
  ];

  let step = 0;

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

  const handleAnswer = (selected) => {
    const { c, f } = quiz[step];
    const correct = selected === c;

    if (correct) {
      feedbackEl.textContent = f[1];
      feedbackEl.className = "mt-4 fw-bold text-success";
      disableButtons();
      setTimeout(() => {
        step++;
        step < quiz.length ? showQuestion() : showEnd();
      }, 3000);
    } else {
      feedbackEl.textContent = f[0];
      feedbackEl.className = "mt-4 fw-bold text-danger";
    }
  };

  const disableButtons = () => {
    [...optionsEl.children].forEach(btn => (btn.disabled = true));
  };

  const showEnd = () => {
    const finalMessages = [
      "Me desculpa por isso ksksksksksksksk"
    ];

    questionEl.textContent = "Parabéns! Você concluiu o quiz 🎉";
    optionsEl.innerHTML = "";
    
    feedbackEl.className = "mt-4 fw-bold text-info";
    feedbackEl.textContent = finalMessages[Math.floor(Math.random() * finalMessages.length)];

    // Botão "Ir pra surpresa"
    const surpriseBtn = document.createElement("button");
    surpriseBtn.className = "btn btn-primary mt-4";
    surpriseBtn.textContent = "Ir pra surpresa 🎁";
    surpriseBtn.onclick = () => {
      // Altere para o link/tela real da sua surpresa
      window.location.href = "surpresa.html"; // Substitua pelo caminho certo
    };

    optionsEl.appendChild(surpriseBtn);
  };


  showMessages();
});

