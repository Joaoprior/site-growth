var banners = ["img/banner1.webp", "img/banner2.webp"];
var bannersAtual = 0;

// Função para trocar os banners
function trocaBanner() {
    bannersAtual = (bannersAtual + 1) % banners.length;
    document.querySelector('.destaque img').src = banners[bannersAtual];
}

// Timer para troca automática (4 segundos)
var timer = setInterval(trocaBanner, 4000);

// Botão de controle play/pause
var controle = document.querySelector('.pause');

controle.onclick = function () {
    if (controle.className === 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 6000);
        controle.className = 'pause';
    }
    return false;
};
