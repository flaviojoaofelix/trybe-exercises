import React from "react";

class EstadoEventos extends React.Component {
  constructor() {
    super();
    this.state = {
      button1: 0,
      button2: 0,
      button3: 0,
    };
  }

  handleClick = (botao) => {
    this.setState((previousState, _props) => ({
      [botao]: previousState[botao] + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Unindo componentes com estados e eventos</h2>
          <h3>Exemplo - 01 (Para fixar)</h3>
          <button onClick={() => this.handleClick("button1")}>
            {this.state.button1}
          </button>
          <button onClick={() => this.handleClick("button2")}>
            {this.state.button2}
          </button>
          <button onClick={() => this.handleClick("button3")}>
            {this.state.button3}
          </button>
        </header>
      </div>
    );
  }
}

export default EstadoEventos;
