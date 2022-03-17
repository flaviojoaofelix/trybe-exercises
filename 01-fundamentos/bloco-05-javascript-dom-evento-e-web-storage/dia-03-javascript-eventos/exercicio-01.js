function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// Questão 01

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul>
// com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e
// Segunda-feira.
//   Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//   Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//   Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezDaysHolidays = [24, 25, 31];
const dezDaysFridays = [4, 11, 18, 25];

let daysList = document.getElementById('days');

function createDays(days, fridays, holidays) {
    for (let i = 0; i < days.length; i += 1) {
        let day = document.createElement('li');
        day.innerText = days[i];
        day.className = 'day';

        if(verifyFridays(days[i], fridays)) day.classList.add('friday');
        if(verifyHolidays(days[i], holidays)) day.classList.add('holiday');
    
        daysList.appendChild(day);
    }
}
function verifyHolidays(day, holidays) {
    for (let holiday of holidays) {
        if (holiday === day) return true;
    }
    return false;
}
function verifyFridays(day, fridays) {
    for (let friday of fridays) {
        if (friday === day) return true;
    }
    return false;
}

createDays(dezDaysList, dezDaysFridays, dezDaysHolidays);

// Questão 02

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//   Adicione a este botão a ID "btn-holiday" .
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButtons(name, id, parent) {
    let btn = document.createElement('button');
    let btnParent = document.querySelector(parent);
    btn.innerText = name;
    btn.setAttribute('ID', id);

    btnParent.appendChild(btn);
}

createButtons('Feriados', 'btn-holiday', '.buttons-container');

// Questão 03

// Implemente uma função que adicione ao botão "Feriados" um evento de "click"
// que muda a cor de fundo dos dias que possuem a classe "holiday" .
//   É interessante que este botão possua também a lógica inversa.
//   Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function highlightHolidays() {
    let holidays = document.querySelectorAll('.holiday');
    for (let i = 0; i < holidays.length; i += 1) {
        let day = holidays[i];
        if (day.style.backgroundColor !== 'green') {
            day.style.backgroundColor = 'green';
        } else {
            day.style.backgroundColor = 'rgb(238,238,238)';
        }
    }
}
function buttonEvent(id, event) {
    btnEvent = document.getElementById(id);
    btnEvent.addEventListener('click', event);
}

buttonEvent('btn-holiday', highlightHolidays);

// Questão 04

// Implemente uma função que receba como parâmetro a string "Sexta-feira"
// e crie dinamicamente um botão com o nome "Sexta-feira".
//   Adicione a este botão o ID "btn-friday" .
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

createButtons('Sexta-feira', 'btn-friday', '.buttons-container');

// Questão 05

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica
// o texto exibido nos dias que são Sexta-feira.
//   É interessante que este botão possua também a lógica inversa.
//   Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeTextFriday() {
    let fridays = document.querySelectorAll('.friday')
    for (let i = 0; i < fridays.length; i += 1) {
        let day = fridays[i];
        if (day.innerText !== 'SEX')  {
            day.innerText = 'SEX';
        } else {
            day.innerText = dezDaysFridays[i];
        }

    }
}

buttonEvent('btn-friday', changeTextFriday);

// Questão 06

// Implemente duas funções que criem um efeito de "zoom".
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e,
// quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//   Dica - Propriedade: event.target .

function dayZoom() {
    days = document.querySelectorAll('.day')
    for (let i = 0; i < days.length; i += 1) {
        days[i].addEventListener('mouseover', dayZoomOver);
        days[i].addEventListener('mouseout', dayZoomOut);
    }
}
function dayZoomOver(day) {
    day.target.style.fontSize = '40px';
}
function dayZoomOut(day) {
    day.target.style.fontSize = '20px';
}

dayZoom();