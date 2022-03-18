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
    let parent = document.querySelector('nav').lastElementChild;
    
    createControl('Fundo', changeBackgroundColor, parent);
    createControl('Texto', changeTextColor, parent);
    createControl('Tamanho da Fonte', changeTextSize, parent);
    createControl('Espaçamento Entre Linhas', changeSpacingBetweenLines, parent);
}

// CONTROLES - CRIAR CONTROLES
function createControl(name, action, parent) {
    let element = document.createElement('li');

    element.appendChild(createButton('+', 'button-plus', action));
    element.appendChild(document.createTextNode(name));
    element.appendChild(createButton('-', 'button-minus', action));

    parent.appendChild(element);
}

// CONTROLES - CRIAR BOTÃO
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
        backgroundColorPos >= colors ? backgroundColorPos = 0 : backgroundColorPos += 1;
    }
    if (button === '-') {
        backgroundColorPos <= 0 ? backgroundColorPos = colors : backgroundColorPos -= 1;
    }

    backgroundColor = backgroundColorList[backgroundColorPos].style;
    document.body.classList.add(backgroundColor);
}

// MUDAR COR DO TEXTO
function changeTextColor(info) {
    document.body.classList.remove(textColor);

    let button = info.target.innerText;
    let colors = Object.keys(textColorList).length - 1;

    if (button === '+') {
        textColorPos >= colors ? textColorPos = 0 : textColorPos += 1;
    }
    if (button === '-') {
        textColorPos <= 0 ? textColorPos = colors : textColorPos -= 1;
    }

    textColor = textColorList[textColorPos].style;
    document.body.classList.add(textColor);
}

// MUDAR TAMANHO DA FONTE
function changeTextSize(info) {
    let paragrafo = document.getElementsByTagName('p');
    let button = info.target.innerText;
    let style;
    let fontSize;
    
    for (let i = 0; i < paragrafo.length; i += 1) {
        style = window.getComputedStyle(paragrafo[i], null).getPropertyValue('font-size');
        fontSize = parseFloat(style);

        if (button === '+') paragrafo[i].style.fontSize = (fontSize + 1) + 'px';
        if (button === '-') paragrafo[i].style.fontSize = (fontSize - 1) + 'px';
    }
}

// MUDAR ESPAÇO ENTRE LINHAS
function changeSpacingBetweenLines(info) {
    let paragrafo = document.getElementsByTagName('p');
    let button = info.target.innerText;
    let style;
    let lineHeight;
    
    for (let i = 0; i < paragrafo.length; i += 1) {
        style = window.getComputedStyle(paragrafo[i], null).getPropertyValue('line-height');
        lineHeight = parseFloat(style);

        if (button === '+') paragrafo[i].style.lineHeight = (lineHeight + 1) + 'px';
        if (button === '-') paragrafo[i].style.lineHeight = (lineHeight - 1) + 'px';
    }
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