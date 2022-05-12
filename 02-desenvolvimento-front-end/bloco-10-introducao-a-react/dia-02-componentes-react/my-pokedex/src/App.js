import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <main className="App">
        <Pokedex pokemons={ pokemons }/>
    </main>
  );
}

export default App;
