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
