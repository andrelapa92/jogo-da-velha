//Dark mode

const bg = document.getElementById('bg-mode');
const mode = document.getElementById('text-mode');
var darkmode = false;
const botao = document.getElementById('reiniciar');

var quadrado1 = document.getElementById('q1');
var quadrado2 = document.getElementById('q2');
var quadrado3 = document.getElementById('q3');
var quadrado4 = document.getElementById('q4');
var quadrado5 = document.getElementById('q5');
var quadrado6 = document.getElementById('q6');
var quadrado7 = document.getElementById('q7');
var quadrado8 = document.getElementById('q8');
var quadrado9 = document.getElementById('q9');

function changeMode() {
    console.log(darkmode);
    bg.classList.toggle('dark-mode');
    if (bg.classList.contains('dark-mode')) {
        darkmode = true;
        botao.classList.add('btn-light');
        botao.classList.remove('btn-dark');
        mode.textContent = 'Dark Mode';
        quadrado1.classList.add('q1-dark');
        quadrado2.classList.add('q2-dark');
        quadrado3.classList.add('q3-dark');
        quadrado4.classList.add('q4-dark');
        quadrado5.classList.add('q5-dark');
        quadrado6.classList.add('q6-dark');
        quadrado7.classList.add('q7-dark');
        quadrado8.classList.add('q8-dark');
        quadrado9.classList.add('q9-dark');
    } else {
        mode.textContent = 'Light Mode';
        darkmode = false;
        botao.classList.remove('btn-light');
        botao.classList.add('btn-dark');
        quadrado1.classList.remove('q1-dark');
        quadrado2.classList.remove('q2-dark');
        quadrado3.classList.remove('q3-dark');
        quadrado4.classList.remove('q4-dark');
        quadrado5.classList.remove('q5-dark');
        quadrado6.classList.remove('q6-dark');
        quadrado7.classList.remove('q7-dark');
        quadrado8.classList.remove('q8-dark');
        quadrado9.classList.remove('q9-dark');
    }
}

//jogo da velha

var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '&nbsp;') {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.classList.add('animate__flipInX');

    if (jogador === 'X') {
        quadrado.style.background = 'red';
        jogador = 'O';
    } else {
        jogador = 'X';
        quadrado.style.background = 'blue';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = 'Jogador ' + jogador + ' está jogando...';
}

function checaVencedor() {

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        jogadorSelecionado.innerHTML = '';
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        jogadorSelecionado.innerHTML = '';
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        jogadorSelecionado.innerHTML = '';
        return;
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        jogadorSelecionado.innerHTML = '';
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        jogadorSelecionado.innerHTML = '';
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        jogadorSelecionado.innerHTML = '';
        return;
    }
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        jogadorSelecionado.innerHTML = '';
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        jogadorSelecionado.innerHTML = '';
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = 'Jogador ' + vencedor + ' venceu!';
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var seqIguais = false;
    if (quadrado1.innerHTML !== '&nbsp;' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        seqIguais = true;
    }
    return seqIguais;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    mudarJogador(jogador);

    if (bg.classList.contains('dark-mode')) {
        for (var i = 1; i <= 9; i++) {
            var quadrado = document.getElementById('q' + i);
            quadrado.innerHTML = '&nbsp;';
            quadrado.style.background = 'transparent';
            quadrado.classList.remove('animate__flipInX');
        }
    } else {
        for (var i = 1; i <= 9; i++) {
            var quadrado = document.getElementById('q' + i);
            quadrado.innerHTML = '&nbsp;';
            quadrado.style.background = 'transparent';
            quadrado.classList.remove('animate__flipInX');
        }
    }
}