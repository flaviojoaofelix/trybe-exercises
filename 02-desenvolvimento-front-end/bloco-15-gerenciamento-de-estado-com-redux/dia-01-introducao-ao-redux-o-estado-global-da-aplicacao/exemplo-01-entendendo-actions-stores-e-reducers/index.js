const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
};
// Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
    default:
      return state;
  };
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('email@dealguem.com'));

console.log(store.getState());
