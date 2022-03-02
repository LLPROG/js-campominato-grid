
/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/

const select = document.getElementById('levels');
const mainSquare = document.getElementById('square');
const play = document.getElementById('btn-play');

let box;
let easy = 101;
let medium = 81;
let hard = 51;
// let value = select.options[1].value;

// function easy
createSquare(box, hard);

//function boxes
function createSquare (element, maxBoxes) {
    for (let i = 1; i < maxBoxes; i++) {
        element = document.createElement('div');
        element.classList.add('box');
        element.innerHTML = i;
    
        mainSquare.append(element);
    }
}
