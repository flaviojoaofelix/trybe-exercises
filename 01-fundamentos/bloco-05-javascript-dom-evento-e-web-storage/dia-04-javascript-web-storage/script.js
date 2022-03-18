///////////////////////
// LISTA DE OBJETOS //
// ESTILOS         //
////////////////////

const backgroundColorList = {
    0: {
        name: 'white',
        style: 'background-white'
    },
    1: {
        name: 'black',
        style: 'background-black'
    },
    2: {
        name: 'charchoal gray',
        style: 'background-charcoalgray'
    }
};

const textColorList = {
    0: {
        name: 'black',
        style: 'color-black'
    },
    1: {
        name: 'white',
        style: 'color-white'
    }
};

////////////////////////
// VARIÁVEIS GLOBAIS //
//////////////////////

var backgroundColor;
var backgroundColorPos;
var textColor;
var textColorPos;

//////////////
// FUNÇÕES //
////////////

// CONTROLES
function controls() {
    let ul = document.querySelector('aside').lastElementChild;
    
    createChangeBackgroundControl(ul);
    createChangeTextControl(ul);
}

// CONTROLES = MUDAR PLANO DE FUNDO
function createChangeBackgroundControl(parent) {
    let changeBackgroundControl = document.createElement('li');
    
    changeBackgroundControl.appendChild(createButton('+', 'button-plus', changeBackgroundColor));
    changeBackgroundControl.appendChild(document.createTextNode('Fundo'));
    changeBackgroundControl.appendChild(createButton('-', 'button-minus', changeBackgroundColor));

    parent.appendChild(changeBackgroundControl);
}

// CONTROLES - MUDAR TEXTO
function createChangeTextControl(parent) {
    let changeTextControl = document.createElement('li');
    
    changeTextControl.appendChild(createButton('+', 'button-plus', changeTextColor));
    changeTextControl.appendChild(document.createTextNode('Texto'));
    changeTextControl.appendChild(createButton('-', 'button-minus', changeTextColor));

    parent.appendChild(changeTextControl);
}

// CRIAR BOTÃO
function createButton(content, style, action) {
    let button = document.createElement('button');
    button.innerText = content;
    button.className = style;

    button.addEventListener('click', action);

    return button;
}

// MUDAR COR DE FUNDO
function changeBackgroundColor(info) {
    document.body.classList.remove(backgroundColor);

    let button = info.target.innerText;
    let colors = Object.keys(backgroundColorList).length - 1;

    if (button === '+') {
        if (backgroundColorPos >= colors) {
            backgroundColorPos = 0;
        } else {
            backgroundColorPos += 1;
        }
    }

    if (button === '-') {
        if (backgroundColorPos <= 0) {
            backgroundColorPos = colors;
        } else {
            backgroundColorPos -= 1;
        }
    }

    backgroundColor = backgroundColorList[backgroundColorPos].style;
    document.body.classList.add(backgroundColor);
}

// MUDAR COR DO TEXTO
function changeTextColor(info) {
    document.body.classList.remove(textColor);

    if (info.target.innerText === '+') {
        textColor = 'color-black';
    }
    if (info.target.innerText === '-') {
        textColor = 'color-white';
    }

    document.body.classList.add(textColor);
}

//////////////////////////////
// INICIALIZAÇÃO DA PÁGINA //
////////////////////////////

window.onload = function() {
    setInitialBackgroundColor();
    setInitialTextColor();
    controls();
}

// INICIALIZAÇÃO - FUNÇÕES

function setInitialBackgroundColor() {
    backgroundColor = backgroundColorList[0].style;
    backgroundColorPos = 0;
    document.body.classList.add(backgroundColor);
}

function setInitialTextColor() {
    textColor = textColorList[0].style;
    textColorPos = 0;
    document.body.classList.add(textColor);
}