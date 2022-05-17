import './App.css';
import DadJoke from './o-ciclo-de-vida-de-um-componente-react/exemplo-01';
import Counter from './entendendo-quando-cada-metodo-e-chamado/exemplo-01';
import RickAndMorty from './requisicoes-e-componentdidmount/exemplo-01';
import ParaFixar01 from './renderizacao-condicional-e-atualizacao-de-arrays-no-estado/para-fixar-01';
import PersonDetails from './renderizacao-condicional-e-atualizacao-de-arrays-no-estado/para-fixar-02';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DadJoke />
      </header>
      <header className="App-header">
        <Counter />
      </header>
      <header className="App-header">
        <RickAndMorty />
      </header>
      <header className="App-header">
        <ParaFixar01 />
      </header>
      <header className="App-header">
        <PersonDetails />
      </header>
    </div>
  );
}

export default App;
