document.addEventListener("DOMContentLoaded", function() {

    const botaoReturn = document.getElementById("return");
    const musicatwo = document.getElementById("musica2");

    document.addEventListener("click", function iniciarMusica() {
        musicatwo.play().catch(() => {});
        document.removeEventListener("click", iniciarMusica);
    });

    botaoReturn.addEventListener("click", function() {
        window.location.href = "index.html";
    });

});