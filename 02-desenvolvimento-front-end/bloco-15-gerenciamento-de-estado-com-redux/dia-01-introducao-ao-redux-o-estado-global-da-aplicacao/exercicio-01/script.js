// Action Types
const nextColor = 'NEXT_COLOR';
const previousColor = 'PREVIOUS_COLOR';
const randomColor = 'RANDOM_COLOR';

// Action
const actionNextColor = {
  type: nextColor,
}

const actionPreviousColor = {
  type: previousColor,
}

const actionRandomColor = {
  type: randomColor,
}

// Setup
const initialState = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case nextColor:
      return {
        ...state,
        index: state.index < state.colors.length - 1 ? state.index += 1 : 0,
      }
    case previousColor:
      return {
        ...state,
        index: state.index > 0 ? state.index -= 1 : state.colors.length - 1,
      }
    case randomColor:
      state.colors.push(criarCor());
      return {
        ...state,
        colors: state.colors,
        index: state.colors.length - 1,
      }
    default:
      return state
  }
};

// Create Store
const store = Redux.createStore(reducer);

// Subscribe
store.subscribe(() => {
  const { colors, index } =  store.getState();

  const container = document.getElementById('container');
  const spanElement = document.getElementById('value');
  
  spanElement.innerText = colors[index];
  document.body.style.backgroundColor = colors[index];
  if (colors[index] === 'black') { 
    container.style.color = 'white';
  } else {
    container.style.color = 'black';
  }
});

// EventListeners
const previousColorButton = document.getElementById('previous');
const nextColorButton = document.getElementById('next');
const randomColorButton = document.getElementById('random');

previousColorButton.addEventListener('click', () => {
  store.dispatch(actionPreviousColor);
});

nextColorButton.addEventListener('click', () => {
  store.dispatch(actionNextColor);
});

randomColorButton.addEventListener('click', () => {
  store.dispatch(actionRandomColor);
});

// Cria Cor
function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}
