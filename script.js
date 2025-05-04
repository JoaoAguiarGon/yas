const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const noButton2 = document.getElementById('no2');
const yesButton2 = document.getElementById('yes2');
const noButton3 = document.getElementById('no3');
const yesButton3 = document.getElementById('yes3');
const noButton4 = document.getElementById('no4');
const yesButton4 = document.getElementById('yes4');
const firstBox = document.getElementById('firstBox');
const secondBox = document.getElementById('secondBox');
const thirdBox = document.getElementById('thirdBox');
const fourthBox = document.getElementById('fourthBox');
const finalBox = document.getElementById('finalBox');
const finalMessageBox = document.getElementById('finalMessageBox');
const dateMessage = document.getElementById('dateMessage');

// Função para fazer o botão "Não" fugir do mouse
function fugirDoMouse(botao) {
    const height = window.innerHeight - 50;
    const width = window.innerWidth - 80;
    botao.style.position = "absolute";
    botao.style.top = Math.random() * height + "px";
    botao.style.left = Math.random() * width + "px";
}

noButton.addEventListener('mouseover', () => fugirDoMouse(noButton));
noButton2.addEventListener('mouseover', () => fugirDoMouse(noButton2));
noButton3.addEventListener('mouseover', () => fugirDoMouse(noButton3));
noButton4.addEventListener('mouseover', () => fugirDoMouse(noButton4));

// Funções para mudar a caixa de pergunta
yesButton.addEventListener('click', () => {
    firstBox.style.display = "none";
    secondBox.style.display = "flex";
});

yesButton2.addEventListener('click', () => {
    secondBox.style.display = "none";
    thirdBox.style.display = "flex";
});

noButton2.addEventListener('click', () => {
    secondBox.style.display = "none";
    thirdBox.style.display = "flex";
});

noButton3.addEventListener('click', () => {
    thirdBox.style.display = "none";
    fourthBox.style.display = "flex";
});

noButton4.addEventListener('click', () => {
    fourthBox.style.display = "none";
    finalBox.style.display = "flex";
});

// Exibe a mensagem "Date marcado!" no centro da tela após clicar no último "Sim"
yesButton4.addEventListener('click', () => {
    fourthBox.style.display = "none";
    finalBox.style.display = "none";

    // Exibe a mensagem centralizada "Date marcado!" no meio da tela
    dateMessage.style.display = "block";
});
