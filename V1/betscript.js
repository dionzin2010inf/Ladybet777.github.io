document.addEventListener("DOMContentLoaded", function() {

    const botaoPlay = document.getElementById("play");
    const botaoHelp = document.getElementById("help");
    const musica = document.getElementById("musica");

    document.addEventListener("click", function iniciarMusica() {
        musica.play().catch(() => {});
        document.removeEventListener("click", iniciarMusica);
    });

    botaoPlay.addEventListener("click", function() {
        window.location.href = "cutscene.html";
    });

    botaoHelp.addEventListener("click", function() {
        window.location.href = "LadyBetHelpMenu.html";
    });

});