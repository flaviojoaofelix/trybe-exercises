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
    let parent = document.querySelector('aside').lastElementChild;
    
    createControl('Fundo', changeBackgroundColor, parent);
    createControl('Texto', changeTextColor, parent);
    createControl('Tamanho da Fonte', changeTextSize, parent)
}

function createControl(name, action, parent) {
    let element = document.createElement('li');

    element.appendChild(createButton('+', 'button-plus', action));
    element.appendChild(document.createTextNode(name));
    element.appendChild(createButton('-', 'button-minus', action));

    parent.appendChild(element);
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