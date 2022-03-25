// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// FUNÇÕES

function prevent(evt) {
    evt.preventDefault();
}

function checkLetter(evt) {
    if(evt.key !== 'a') {
        evt.preventDefault();
    }
}

function createEvent() {
    HREF_LINK.addEventListener('click', prevent);
    INPUT_CHECKBOX.addEventListener('click', prevent);
    INPUT_TEXT.addEventListener('keypress', checkLetter);
}

window.onload = createEvent;