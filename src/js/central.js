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

// ----------------------- pasta de img ------------------------

const imageWindow = document.getElementById('imageWindow');
const openImages = document.getElementById('open-images');

openImages.addEventListener('click', () => {
  imageWindow.style.display = 'flex';
  imageWindow.classList.remove('minimized');
});

function closeWindow() {
  imageWindow.style.display = 'none';
}

function minimizeWindow() {
  imageWindow.style.display = 'none'; // pode futuramente enviar para uma "taskbar"
}

function toggleMaximize() {
  imageWindow.classList.toggle('maximized');
}

// ----------------------- preview de imagem ------------------------

const previewWindow = document.getElementById('previewWindow');
const previewImage = document.getElementById('previewImage');

// Abrir janela ao clicar na imagem
document.querySelectorAll('.image-item img').forEach(img => {
  img.addEventListener('click', () => {
    previewImage.src = img.src;
    previewWindow.style.display = 'flex';
    previewWindow.classList.remove('minimized');
    previewWindow.classList.remove('maximized');
  });
});

function closePreview() {
  previewWindow.style.display = 'none';
}

function minimizePreview() {
  previewWindow.style.display = 'none';
}

// ----------------------- bloco de notas - mensagem ------------------------

// ----------------------- janela de mensagem ------------------------

const messageWindow = document.getElementById('messageWindow');
const messageIcon = Array.from(document.querySelectorAll('.desktop-icon')).find(icon => 
  icon.innerText.trim().toLowerCase() === 'mensagem'
);

if (messageIcon) {
  messageIcon.addEventListener('click', () => {
    messageWindow.style.display = 'flex';
    messageWindow.classList.remove('minimized');
  });
}

function closeMessage() {
  messageWindow.style.display = 'none';
}

function minimizeMessage() {
  messageWindow.style.display = 'none';
}

function maximizeMessage() {
  messageWindow.classList.toggle('maximized');
}


//----------------------- Janela do Segredo ------------------------

const secretWindow = document.getElementById('secret-window');
const secretImage = document.getElementById('secret-image');
const secretIcon = document.getElementById('open-secret');

if (secretIcon) {
  secretIcon.addEventListener('click', () => {
    secretWindow.style.display = 'flex';
    secretWindow.classList.remove('secret-maximized');
  });
}

function closeSecret() {
  secretWindow.style.display = 'none';
}

function minimizeSecret() {
  secretWindow.style.display = 'none';
}

function maximizeSecret() {
  secretWindow.classList.toggle('secret-maximized');
}
