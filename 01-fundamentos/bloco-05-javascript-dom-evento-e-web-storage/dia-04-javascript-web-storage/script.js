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
}

// MUDAR TAMANHO DA FONTE
function changeTextSize(info) {
    let paragrafo = document.getElementsByTagName('p');
    let button = info.target.innerText;
    let style;
    
    for (let i = 0; i < paragrafo.length; i += 1) {
        style = window.getComputedStyle(paragrafo[i], null).getPropertyValue('font-size');
        myPreferences.text.size = parseFloat(style);

        if (button === '+') {
            myPreferences.text.size += 1;
            paragrafo[i].style.fontSize = myPreferences.text.size + 'px';
        }
        
        if (button === '-'){
            myPreferences.text.size -= 1;
            paragrafo[i].style.fontSize = myPreferences.text.size + 'px';
        }
    }
}

// MUDAR ESPAÇO ENTRE LINHAS
function changeSpacingBetweenLines(info) {
    let paragrafo = document.getElementsByTagName('p');
    let button = info.target.innerText;
    let style;
    
    for (let i = 0; i < paragrafo.length; i += 1) {
        style = window.getComputedStyle(paragrafo[i], null).getPropertyValue('line-height');
        myPreferences.text.lineH = parseFloat(style);

        if (button === '+') {
            myPreferences.text.lineH += 1;
            paragrafo[i].style.lineHeight = myPreferences.text.lineH + 'px';
        }
        if (button === '-') {
            myPreferences.text.lineH -= 1;
            paragrafo[i].style.lineHeight = myPreferences.text.lineH + 'px';
        }
    }
}

// MUDAR TIPO DE FONTE
function changeFontFamily(info) {
    let button = info.target.innerText;
    let fonts = fontFamilyList.length

    if (button === '+') {
        myPreferences.text.fontPos >= fonts ? myPreferences.text.fontPos = 0 : myPreferences.text.fontPos += 1;
    }
    if (button === '-') {
        myPreferences.text.fontPos <= 0 ? myPreferences.text.fontPos = fonts : myPreferences.text.fontPos -= 1;
    }

    myPreferences.text.font = fontFamilyList[myPreferences.text.fontPos];
    document.body.style.fontFamily = myPreferences.text.font;
}

///////////////////
// PREFERÊNCIAS //
/////////////////

// SAVE
function savePreferences () {
    storage.setItem('userPreferences', JSON.stringify(myPreferences))
    console.log(myPreferences);
}

// LOAD
function loadPreferences () {
    myPreferences = JSON.parse(storage.getItem('userPreferences'))
    console.log(myPreferences);
}

//////////////////////////////
// INICIALIZAÇÃO DA PÁGINA //
////////////////////////////

window.onload = function() {
    setInitialBackgroundColor();
    setInitialTextColor();
    setInitialTextColor();
    setInitialFontFamily();
    controls();
}

// INICIALIZAÇÃO - FUNÇÕES

function setInitialBackgroundColor() {
    myPreferences.bkg.color = backgroundColorList[0].style;
    myPreferences.bkg.colorPos = 0;
    document.body.classList.add(myPreferences.bkg.color);
}

function setInitialTextColor() {
    myPreferences.text.color = textColorList[0].style;
    myPreferences.text.colorPos = 0;
    document.body.classList.add(myPreferences.text.color);
}

function setInitialFontFamily() {
    myPreferences.text.fontPos = 0;
    myPreferences.text.font = fontFamilyList[myPreferences.text.fontPos];
    document.body.style.fontFamily = myPreferences.text.font;
}