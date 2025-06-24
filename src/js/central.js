// Atualiza o relógio na barra de tarefas a cada segundo
function updateClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;

  const now = new Date();
  // Formato HH:MM
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');

  clock.textContent = `${hours}:${minutes}`;
}

// Atualiza o relógio já ao carregar a página
updateClock();
// Atualiza o relógio a cada 1 segundo
setInterval(updateClock, 1000);

// Futuro: adicionar funcionalidades de abrir pastas, menu iniciar etc.
