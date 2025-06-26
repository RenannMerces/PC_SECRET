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
