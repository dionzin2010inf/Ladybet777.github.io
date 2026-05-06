document.addEventListener("DOMContentLoaded", function() {

    const musicathree = document.getElementById("musica3");
    const botaoReturn2 = document.getElementById("return2");
    const botoes = document.querySelectorAll(".numero");

    document.addEventListener("click", function iniciarMusica() {
        musicathree.play().catch(() => {});
        document.removeEventListener("click", iniciarMusica);
    });

    botaoReturn2.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativas = 3;

    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {

            if (tentativas <= 0) return;

            let palpite = parseInt(botao.innerText);

            if (palpite === numeroSecreto) {
                alert("Parabéns! Você salvou Ladybug e CatNoir de PaulinhoBet! Zerou!");
                desativarBotoes();
            } else {
                tentativas--;

                if (palpite > numeroSecreto) {
                    alert("HAHAHA! O número é menor.");
                } else {
                    alert("Como ele sabe que o número é maior! Impossível!");
                }

                if (tentativas === 0) {
                    alert("Acabou Ladybug e CatNoir! O número era " + numeroSecreto);
                    desativarBotoes();
                }
            }

        });
    });

    function desativarBotoes() {
        botoes.forEach(function(botao) {
            botao.disabled = true;
        });
    }

});