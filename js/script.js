//pega a class .mario e coloca na const mario
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

//Função jump
const jump = () => {
    //adicionando a class jump na const mario
    mario.classList.add('mario-jump');

    //Setando um timeout para remover a class mario-jump da imagem do mario
    setTimeout(() => {
        mario.classList.remove('mario-jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10)

//Precionando qualquer tecla é executada a função jump da linha 5, adicionando a class mario-jump a variavel mario que está recebendo a class .mario
document.addEventListener('keydown', jump);

//parei no minuto