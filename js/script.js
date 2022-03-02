
/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/

const select = document.getElementById('levels');
const mainSquare = document.getElementById('square');

let box;
// let value = select.options[1].value;

for (let i = 1; i < 101; i++) {
    box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = i;

    mainSquare.append(box);

}
