import React from 'react';

class BindThis extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    console.log('Botão 1 - this:', this);
  }

  handleButtonTwo() {
    console.log('Botão 2 - this:', this);
  }

  handleButtonThree() {
    console.log('Botão 3 - this:', this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Vinculando Funções a Classe Com This e Bind no Constructor</h2>
          <h3>Exemplo - 01</h3>
          <button onClick={ this.handleButtonOne }>Botão 1</button>
          <button onClick={ this.handleButtonTwo }>Botão 2</button>
          <button onClick={ this.handleButtonThree }>Botão 3</button>
        </header>
      </div>
    );
  }
}

export default BindThis;
