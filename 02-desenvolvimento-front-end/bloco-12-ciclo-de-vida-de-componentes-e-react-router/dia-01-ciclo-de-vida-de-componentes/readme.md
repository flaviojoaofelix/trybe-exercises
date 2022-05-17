# Trybe - Exercícios
## Bloco 12 - dia 01
### Ciclo de Vida de Componentes e React Router
### Ciclo de vida de componentes

### Exemplos

#### O Ciclo de Vida de um componente React
_src/o-ciclo-de-vida-de-um-componente-react/exemplo-01.jsx_ (Dad Joke)

```
import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
      }

      </div>
    );
  }
}

export default DadJoke;
```

#### Entendendo quando cada método é chamado
_src/entendendo-quando-cada-metodo-e-chamado/exemplo-01.jsx_

```
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
```

```
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }
```

#### Requisições e componentDidMount
_src/requisicoes-e-componentdidmount/exemplo-01.jsx_ (Rick and Morty)

```
// App.css
.App {
  background-size: cover;
  background: linear-gradient(-45deg,#0b0c0c,  #125269, #125269, #0b0c0c);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.container {
  background-color: rgb(212, 195, 195);
  border-radius: 2px;
  border: 3px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.418);
  color: black;
  display: flex;
  flex-direction: column;
  height: 20%;
  margin: 5px;
  width: 300px;
}

.body {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 30px;
}
```

```
// App.css
.App {
  background-size: cover;
  background: linear-gradient(-45deg,#0b0c0c,  #125269, #125269, #0b0c0c);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.container {
  background-color: rgb(212, 195, 195);
  border-radius: 2px;
  border: 3px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.418);
  color: black;
  display: flex;
  flex-direction: column;
  height: 20%;
  margin: 5px;
  width: 300px;
}

.body {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 30px;
}
```

```
render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
```

```
//  Primeira maneira:
    fetchCharacters() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }

    componentDidMount() {
      this.fetchCharacters();
    }

//  Segunda maneira:
    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }
```

#### Renderização condicional e atualização de arrays no estado

#### Para Fixar - 01
_src/renderizacao-condicional-e-atualizacao-de-arrays-no-estado/para-fixar-01.jsx_

```
// src/App.js
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  constructor() {
    // 💡 me preencha!
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    // 💡 está faltando algo aqui!
  }
}

export default App;
```

_src/renderizacao-condicional-e-atualizacao-de-arrays-no-estado/parafixar01.css_
```
/* src/App.css */
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css';

.card {
  background-color: aliceblue;
  border-radius: 25px !important;
  max-height: 200px;
  padding: 10px;
  text-align: center;
  width: 30vw;
  max-width: 250px;
}


.c-button {
  margin-top: 10px;
}

.c-img {
  max-width: 100px;
}

.card-list {
  margin-top: 20px;
  width: 100vw;
}

.central {
  height: 10vh;
}

.connections-blue {
  background-color: lightblue;
}

.connections-coral {
  background-color: lightcoral;
}


.counter {
  margin: 15px 0;
  text-align: center;
}

.git {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  height: 40vh;
  margin: 10px;
}

.git-connections {
  align-items: center;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
}

.gitNetwork {
  background-color: lavender;
  height: 100vh;
  width: 100vw;
}

.form {
  text-align: center;
  width: 90%;
}

.myPicture {
  border: 4px solid white;
  border-radius: 100%;
  width: 200px;
}

img {
  border-radius: 25px !important;
}

input {
  min-width: 150px !important;
  max-width: 250px;
}

p {
  text-align: center;
}

span {
  color: #710ece;
  font-size: x-large;
  font-weight: 600;
}
```

_src/renderizacao-condicional-e-atualizacao-de-arrays-no-estado/para-fixar-connections.jsx_
```
// src/components/Connections.js
import React from 'react';

class Connections extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      list: [],
      counter: 0,
      background: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.contactAdder = this.contactAdder.bind(this);
    this.changeToBlue = this.changeToBlue.bind(this);
    this.changeToCoral = this.changeToCoral.bind(this);
  }

  shouldComponentUpdate(_nextProps, { list }) {
    // 💡 o que será que vai aqui?
  }

  componentDidUpdate(_prevProps, prevState) {
    // 💡 tá meio vazio esse método, não?
  }

  handleChange({ target: { value } }) {
    this.setState({
      user: value,
    });
  }

  async handleClick() {
    const { user, list, counter } = this.state;
    const url = `https://api.github.com/users/${user}`;
    const isUserAbsent = !list.some((contact) => contact.login === user);

    try {
      const apiResponse = await fetch(url);
      const profileObject = await apiResponse.json();

      if (profileObject.login && isUserAbsent) {
        this.setState({
          list: [...list, profileObject],
          counter: counter + 1,
        });
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeToBlue() {
    this.setState({ background: 'connections-blue' });
  }

  changeToCoral() {
    this.setState({ background: 'connections-coral' });
  }

  removeContact(loginToRemove) {
    const { list, counter } = this.state;
    const updatedList = list.filter(({ login }) => login !== loginToRemove);

    this.setState({
      list: updatedList,
      counter: counter - 1,
    });
  }

  contactAdder(counter) {
    return (
      <div className="counter">
        <div>
          <h5>Quantidade de contatos:</h5>
          <span>{ counter }</span>
        </div>
        <div className="form">
          <form className="input-group justify-content-center">
            <input
              className="form-control"
              type="text"
              onChange={ this.handleChange }
              placeholder="Adicione seu contato famoso"
            />
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
    );
  }

  contactList(list) {
    return (
      <div className="card-list d-flex flex-row justify-content-around">
        { list.map((api) => (
          <div className="card d-flex align-items-center" key={ api.name }>
            <h5>{ api.name }</h5>
            <img className="c-img" src={ api.avatar_url } alt="Avatar" width="50%" />
            <button
              className="c-button btn btn-danger w-25 align-self-center"
              data-login={ api.login }
              type="button"
              onClick={ () => this.removeContact(api.login) }
            >
              X
            </button>
          </div>))}
      </div>
    );
  }

  render() {
    const { list, counter, background } = this.state;

    return (
      <div className={ `git-connections ${background}` }>
        { this.contactAdder(counter) }
        { this.contactList(list) }
      </div>
    );
  }
}

export default Connections;
```

_src/renderizacao-condicional-e-atualizacao-de-arrays-no-estado/para-fixar-01-profile.jsx_
```
// src/components/Profile.js
import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
    };

    this.changeDataJson = this.changeDataJson.bind(this);
  }

  async componentDidMount() {
    // 💡 não se esqueça de mim!
  }

  componentWillUnmount() {
    // 💡 eu também quero um código!
  }

  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }

  render() {
    const { api: { name, email, bio } = '', api } = this.state;

    if (!api) return <p>Loading...</p>;

    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ name }</h1>
        <span>{ email }</span>
        <img className="myPicture" src={ api.avatar_url } alt="Avatar" />
        <p>{ bio }</p>
      </div>
    );

    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { card }
      </div>
    );
  }
}
```

#### Para Fixar - 02
_src/renderizacao-condicional-e-atualizacao-de-arrays-no-estado/para-fixar-02.jsx_ (PersonDetails)

```
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "coordinates": {
          "latitude": "20.9267",
          "longitude": "-7.9310"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "brad.gibson@example.com",
      "login": {
        "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        "username": "silverswan131",
        "password": "firewall",
        "salt": "TQA1Gz7x",
        "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
        "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
      },
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      ...
    }
  ]
}
```