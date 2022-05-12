

function FancyButtons() {

  function handleButtonOne() {
    console.log('Botão 1');
  }

  function handleButtonTwo() {
    console.log('Botão 2');
  }

  function handleButtonThree() {
    console.log('Botão 3');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Introdução aos Eventos</h2>
        <h3>Exemplo - 01</h3>
        <button onClick={ handleButtonOne }>Botão 1</button>
        <button onClick={ handleButtonTwo }>Botão 2</button>
        <button onClick={ handleButtonThree }>Botão 3</button>
      </header>
    </div>
  );
}

export default FancyButtons;
