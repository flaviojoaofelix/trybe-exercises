// import { combineReducers } from 'redux';

// Action Types
const firstReducer = 'FIRST_REDUCER';
const secondReducer = 'SECOND_REDUCER';

// Actions
const actionFirstReducer = {
  type: firstReducer,
}

const actionSecondReducer = {
  type: secondReducer,
}

// Setup
const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

// Reducers
const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case firstReducer:
      return {
        nome: action.nome,
        sobrenome: action.sobrenome,
        endereco: action.endereco,
        cidade: action.cidade,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case secondReducer:
      return {
        nome: action.nome,
        sobrenome: action.sobrenome,
        endereco: action.endereco,
        cidade: action.cidade,
      }
    default:
      return state;
  }
};

// Reducers Combinados
const combinedReducers = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,  
});

// Create Store
const store = Redux.createStore(combinedReducers);

// Store Subscribe
store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

  document.getElementById('nome-1').innerText = meuPrimeiroReducer.nome;
  document.getElementById('sobrenome-1').innerText = meuPrimeiroReducer.sobrenome;
  document.getElementById('endereco-1').innerText = meuPrimeiroReducer.endereco;
  document.getElementById('cidade-1').innerText = meuPrimeiroReducer.cidade;

  document.getElementById('nome-2').innerText = meuSegundoReducer.nome;
  document.getElementById('sobrenome-2').innerText = meuSegundoReducer.sobrenome;
  document.getElementById('endereco-2').innerText = meuSegundoReducer.endereco;
  document.getElementById('cidade-2').innerText = meuSegundoReducer.cidade;
});

// Novos Dados
const novosDadosFR = ['Flávio', 'Félix', 'Rua Felipe Schmidt, 01', 'Florianópolis'];
const novosDadosSR = ['Nicolle', 'Vigna', 'Rua da Beleza Eterna, 10', 'Porto Alegre'];

// OnLoad
window.onload = () => {
  setTimeout(() => {
    //Seu dispatch vem aqui //
    store.dispatch({
      type: firstReducer,
      nome: novosDadosFR[0],
      sobrenome: novosDadosFR[1],
      endereco: novosDadosFR[2],
      cidade: novosDadosFR[3],
    });
    store.dispatch({
      type: secondReducer,
      nome: novosDadosSR[0],
      sobrenome: novosDadosSR[1],
      endereco: novosDadosSR[2],
      cidade: novosDadosSR[3],
    });
  }, 3000);
};
