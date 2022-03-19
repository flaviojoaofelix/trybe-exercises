////////////////////////
// VARIÁVEIS GLOBAIS //
//////////////////////

var backgroundColor;
var backgroundColorPos;
var textColor;
var textColorPos;
var fontFamily;
var fontFamilyPos;
var fontSize;

///////////////////////
// LISTA DE OBJETOS //
// User Preference //
////////////////////

var myPreferences = {
    bkg: {
        color: '',
        colorPos: ''
    },
    text: {
        color: '',
        colorPos: '',
        font: '',
        fontPos: '',
        size: '',
        lineH: '',
    }
}

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
    },
    3: {
        name: 'golden rod',
        style: 'background-goldenrod'
    },
    4: {
        name: 'indigo blue',
        style: 'background-indigoblue'
    },
    5: {
        name: 'orange',
        style: 'background-orange'
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
    },
    2: {
        name: 'golden rod',
        style: 'color-goldenrod'
    },
    3: {
        name: 'green',
        style: 'color-green'
    },
    4: {
        name: 'purple',
        style: 'color-purple'
    },
    5: {
        name: 'yellow',
        style: 'color-yellow'
    }
};

const fontFamilyList = ['times', 'sans-serif', 'serif', 'fantasy', 'cursive', 'monospace'];