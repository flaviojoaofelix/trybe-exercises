//////////////
// FUNÇÕES //
////////////

// CONTROLES
function controls() {
    let parent = document.querySelector('nav').lastElementChild;
    
    createControl('Cor de Fundo', changeBackgroundColor, parent);
    createControl('Cor de Texto', changeTextColor, parent);
    createControl('Tamanho da Fonte', changeTextSize, parent);
    createControl('Tipo da Fonte' , changeFontFamily, parent);
    createControl('Espaçamento', changeSpacingBetweenLines, parent);
    createControl('Resetar', resetPreferences, parent);
}

// CONTROLES - CRIAR CONTROLES
function createControl(name, action, parent) {
    let element = document.createElement('li');

    if (name !== 'Resetar') {
        element.appendChild(createButton('+', 'button-plus', action));
        element.appendChild(document.createTextNode(name));
        element.appendChild(createButton('-', 'button-minus', action));
    } else {
        element.appendChild(createButton(name, 'button-plus', action));
    }

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
    document.body.classList.remove(myPreferences.bkg.color);

    let button = info.target.innerText;
    let colors = Object.keys(backgroundColorList).length - 1;

    if (button === '+') {
        myPreferences.bkg.colorPos >= colors ? myPreferences.bkg.colorPos = 0 : myPreferences.bkg.colorPos += 1;
    }
    if (button === '-') {
        myPreferences.bkg.colorPos <= 0 ? myPreferences.bkg.colorPos : myPreferences.bkg.colorPos -= 1;
    }

    myPreferences.bkg.color = backgroundColorList[myPreferences.bkg.colorPos].style;
    document.body.classList.add(myPreferences.bkg.color);

    savePreferences();
}

// MUDAR COR DO TEXTO
function changeTextColor(info) {
    document.body.classList.remove(myPreferences.text.color);

    let button = info.target.innerText;
    let colors = Object.keys(textColorList).length - 1;

    if (button === '+') {
        myPreferences.text.colorPos >= colors ? myPreferences.text.colorPos = 0 : myPreferences.text.colorPos += 1;
    }
    if (button === '-') {
        myPreferences.text.colorPos <= 0 ? myPreferences.text.colorPos = colors : myPreferences.text.colorPos -= 1;
    }

    myPreferences.text.color = textColorList[myPreferences.text.colorPos].style;
    document.body.classList.add(myPreferences.text.color);

    savePreferences();
}

// MUDAR TAMANHO DA FONTE
function changeTextSize(info) {
    let paragrafo = document.getElementsByTagName('p');
    let button = info.target.innerText;
    
    if (button === '+') myPreferences.text.size += 1;
    if (button === '-') myPreferences.text.size -= 1;

    for (let i = 0; i < paragrafo.length; i += 1) {
        paragrafo[i].style.fontSize = myPreferences.text.size + 'px';
    }

    savePreferences();
}

// MUDAR ESPAÇO ENTRE LINHAS
function changeSpacingBetweenLines(info) {
    let paragrafo = document.getElementsByTagName('p');
    let button = info.target.innerText;
    
    for (let i = 0; i < paragrafo.length; i += 1) {

        if (button === '+') {
            myPreferences.text.lineH += 5;
            paragrafo[i].style.lineHeight = myPreferences.text.lineH + '%';
        }
        if (button === '-') {
            myPreferences.text.lineH -= 5;
            paragrafo[i].style.lineHeight = myPreferences.text.lineH + '%';
        }
    }

    savePreferences();
}

// MUDAR TIPO DE FONTE
function changeFontFamily(info) {
    let button = info.target.innerText;
    let fonts = fontFamilyList.length - 1;

    if (button === '+') {
        myPreferences.text.fontPos >= fonts ? myPreferences.text.fontPos = 0 : myPreferences.text.fontPos += 1;
    }
    if (button === '-') {
        myPreferences.text.fontPos <= 0 ? myPreferences.text.fontPos = fonts : myPreferences.text.fontPos -= 1;
    }

    myPreferences.text.font = fontFamilyList[myPreferences.text.fontPos];
    document.body.style.fontFamily = myPreferences.text.font;

    savePreferences();
}

function resetPreferences() {
    storage.removeItem('userPreferences');
    document.body.classList.remove(myPreferences.bkg.color);
    document.body.classList.remove(myPreferences.text.color);
    document.querySelector('nav').lastElementChild.innerHTML = '';

    start();
}

///////////////////
// PREFERÊNCIAS //
/////////////////

// SAVE
function savePreferences () {
    storage.setItem('userPreferences', JSON.stringify(myPreferences))
}

// LOAD
function loadPreferences () {
    myPreferences = JSON.parse(storage.getItem('userPreferences'))
}

//////////////////////////////
// INICIALIZAÇÃO DA PÁGINA //
////////////////////////////

window.onload = start;

function start() {
    if (storage.getItem('userPreferences') !== null) {
        loadPreferences();
    } else {
        setDefaultPreferences();
    }

    setInitialBackgroundColor();
    setInitialTextColor();
    setInitialTextColor();
    setInitialFontFamily();
    setInitialFontHeight();
    setInitialFontSize();
    controls();
}

// INICIALIZAÇÃO - FUNÇÕES

function setInitialBackgroundColor() {
    document.body.classList.add(myPreferences.bkg.color);
}

function setInitialTextColor() {
    document.body.classList.add(myPreferences.text.color);
}

function setInitialFontSize() {
    let paragrafo = document.getElementsByTagName('p');

    for (let i = 0; i < paragrafo.length; i += 1) {
        paragrafo[i].style.fontSize = myPreferences.text.size + 'px';
    }
}

function setInitialFontFamily() {
    document.body.style.fontFamily = myPreferences.text.font;
}

function setInitialFontHeight() {
    document.body.style.lineHeight = myPreferences.text.lineH + '%';
}

function setDefaultPreferences() {
    myPreferences.bkg.color = 'background-white';
    myPreferences.bkg.colorPos = 0;
    myPreferences.text.color = 'color-black';
    myPreferences.text.colorPos = 0;
    myPreferences.text.font = 'times'
    myPreferences.text.fontPos = 0;
    myPreferences.text.size = 16;
    myPreferences.text.lineH = 110;
}