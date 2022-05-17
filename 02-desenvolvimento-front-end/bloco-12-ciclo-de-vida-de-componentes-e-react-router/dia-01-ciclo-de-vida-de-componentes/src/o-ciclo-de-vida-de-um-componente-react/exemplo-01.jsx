import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState({ loading: true },
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject,
        });
      }
    )
  }

  renderJoke = () => {
    const { jokeObj } = this.state;
    return (
      <div>
        <p>{ jokeObj.joke }</p>
        <button onClick={ this.saveJoke }>Salvar</button>
      </div>
    );
  }

  saveJoke = () => {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    this.setState(({ storedJokes, jokeObj }) => ({ storedJokes: [...storedJokes, jokeObj] }));
    this.fetchJoke();
  }

  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
        <p>{ loading ? loadingElement : this.renderJoke() }</p>
      </div>
    );
  }
}

export default DadJoke;
