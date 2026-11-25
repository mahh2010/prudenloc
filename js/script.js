// =====================================
// MENU MOBILE
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// =====================================
// BUSCA DE BAIRROS
// =====================================

const buscaBairro = document.getElementById("buscaBairro");

if (buscaBairro) {

    buscaBairro.addEventListener("keyup", () => {

        const texto = buscaBairro.value.toLowerCase();

        const cards = document.querySelectorAll(".bairro-card");

        cards.forEach(card => {

            const titulo = card.querySelector("h3")
                .textContent
                .toLowerCase();

            if (titulo.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// =====================================
// FORMULÁRIO DE COMUNICAÇÃO
// =====================================

const form = document.getElementById("formComunicacao");
const feedback = document.getElementById("feedback");

if (form) {

    const palavrasProibidas = [
        "idiota",
        "burro",
        "racista",
        "preconceito",
        "xingamento"
    ];

    form.addEventListener("submit", function (event) {

        const nome = document
            .getElementById("nome")
            .value
            .trim();

        const tipo = document
            .getElementById("tipo")
            .value;

        const mensagem = document
            .getElementById("mensagem")
            .value
            .trim();

        if (!nome || !tipo || !mensagem) {

            event.preventDefault();

            feedback.style.color = "red";
            feedback.textContent =
                "Preencha todos os campos.";

            return;
        }

        const possuiPalavraProibida =
            palavrasProibidas.some(palavra =>
                mensagem.toLowerCase().includes(palavra)
            );

        if (possuiPalavraProibida) {

            event.preventDefault();

            feedback.style.color = "red";
            feedback.textContent =
                "Sua mensagem contém palavras inadequadas.";

            return;
        }

        feedback.style.color = "#218344";
        feedback.textContent =
            "Enviando contribuição...";

    });

}

// =====================================
// ANIMAÇÃO AO ROLAR
// =====================================

const cards = document.querySelectorAll(".card");

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    });

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = ".6s";

    observer.observe(card);

});

// =====================================
// MENSAGEM DE BOAS-VINDAS
// =====================================

window.addEventListener("load", () => {

    console.log(
        "PrudenLoc carregado com sucesso!"
    );

});

// =====================================
// BOTÃO VOLTAR AO TOPO
// =====================================

const voltarTopo =
    document.createElement("button");

voltarTopo.innerHTML = "⬆";
voltarTopo.id = "btnTopo";

document.body.appendChild(voltarTopo);

voltarTopo.style.position = "fixed";
voltarTopo.style.bottom = "20px";
voltarTopo.style.right = "20px";
voltarTopo.style.width = "50px";
voltarTopo.style.height = "50px";
voltarTopo.style.border = "none";
voltarTopo.style.borderRadius = "50%";
voltarTopo.style.background = "#DF241B";
voltarTopo.style.color = "#fff";
voltarTopo.style.cursor = "pointer";
voltarTopo.style.display = "none";
voltarTopo.style.fontSize = "20px";
voltarTopo.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        voltarTopo.style.display = "block";
    } else {
        voltarTopo.style.display = "none";
    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =====================================
// ANO AUTOMÁTICO NO CONSOLE
// =====================================

const anoAtual = new Date().getFullYear();

console.log(
    "PrudenLoc © " + anoAtual
);