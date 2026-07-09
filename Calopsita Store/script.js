const imagens = [
    "Calopsita1.avif",
    "Calopsita2.avif",
    "Calopsita3.avif"
];

let atual = 0;

const banner = document.getElementById("info-banner");
const dots = document.querySelectorAll(".dot");

function atualizarBanner() {

    banner.src = imagens[atual];

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[atual].classList.add("active");

}

document.querySelector(".next").addEventListener("click", function () {

    atual++;

    if (atual === imagens.length) {
        atual = 0;
    }

    atualizarBanner();

});

document.querySelector(".prev").addEventListener("click", function () {

    atual--;

    if (atual < 0) {
        atual = imagens.length - 1;
    }

    atualizarBanner();

});