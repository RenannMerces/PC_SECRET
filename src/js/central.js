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

  // ----------------------- popover windowns ------------------------

  const btnWindows = document.getElementById('btn-windows');
  const popover = document.getElementById('windows-popover');

  btnWindows.addEventListener('click', () => {
    popover.classList.toggle('d-none');
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!btnWindows.contains(e.target) && !popover.contains(e.target)) {
      popover.classList.add('d-none');
    }
  });

// ----------------------- music player ------------------------

  const audioIcon = document.getElementById('audio-icon');
  const audioPlayer = document.getElementById('audio-player');
  const audioGif = document.getElementById('audio-gif');

  audioIcon.addEventListener('click', () => {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      audioGif.style.display = 'none';
    } else {
      audioPlayer.play();
      audioGif.style.display = 'block';

      // Oculta o GIF após 10 segundos
      setTimeout(() => {
        audioGif.style.display = 'none';
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      }, 10000); // 10 segundos = 10000ms
    }
  });