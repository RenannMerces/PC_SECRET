// login.js

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.login-container');
  container.classList.add('show');

  const senhaInput = document.getElementById('senha');
  if (senhaInput) {
    senhaInput.focus();
  }
});

function desligar() {
  const body = document.body;
  body.innerHTML = `
    <div class="d-flex justify-content-center align-items-center text-white w-100 h-100 bg-dark flex-column">
      <i class="bi bi-power" style="font-size: 5rem;"></i>
      <p class="mt-3 fs-4">Desligando...</p>
    </div>
  `;

  setTimeout(() => {
    window.close();
  }, 2000);
}

// ----------------------- wifi ------------------------

  document.addEventListener("DOMContentLoaded", function () {
    const wifiIcon = document.getElementById("wifi-icon");
    const wifiMenu = document.getElementById("wifi-menu");

    // Alterna o menu ao clicar
    wifiIcon.addEventListener("click", () => {
      wifiMenu.style.display = wifiMenu.style.display === "block" ? "none" : "block";
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", function (event) {
      if (!wifiMenu.contains(event.target) && !wifiIcon.contains(event.target)) {
        wifiMenu.style.display = "none";
      }
    });
  });

// ----------------------- perfils  ------------------------

  const perfilTrigger = document.getElementById("perfil-trigger");
  const perfilMenu = document.getElementById("perfil-menu");

  perfilTrigger.addEventListener("click", () => {
    perfilMenu.style.display = perfilMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!perfilMenu.contains(event.target) && !perfilTrigger.contains(event.target)) {
      perfilMenu.style.display = "none";
    }
  });
