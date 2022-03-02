
/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/

const select = document.getElementById('levels');
const mainSquare = document.getElementById('square');
const playButton = document.getElementById('btn-play');

let easySquare = document.querySelector('.easy-square');
let mediumSquare = document.querySelector('.medium-square');
let hardSquare = document.querySelector('.hard-square');


let box;

let easy = 101;
let medium = 81;
let hard = 51;

createSquare(box, easy, easySquare);
createSquare(box, medium, mediumSquare);
createSquare(box, hard, hardSquare);


clickPlay(playButton, easySquare, mediumSquare, hardSquare);
clickPlay(playButton, mediumSquare, easySquare, hardSquare);
clickPlay(playButton, hardSquare, mediumSquare, easySquare);


// function click add and remove class
function clickPlay (button, add, remove1, remove2) {
    button.addEventListener('click', function() {
        add.classList.add('active')
        remove1.classList.remove('active')
        remove2.classList.remove('active')
    })
}


//function boxes
function createSquare (element, maxBoxes, square) {
    for (let i = 1; i < maxBoxes; i++) {
        element = document.createElement('div');
        element.classList.add('box');
        element.innerHTML = i;
    
        square.append(element);
    }
}
