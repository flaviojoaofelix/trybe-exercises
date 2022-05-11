import './App.css';
import FancyButtons from './introducao-aos-eventos/exemplo-01';
import BindThis from './vinculando-funcoes-a-classe-com-this-e-bind-no-constructor/exemplo-01';
import EstadoEventos from './unindo-componentes-com-estados-e-eventos/exemplo-01';

function App() {
  return (
    <div className="App">
      <FancyButtons />
      <BindThis />
      <EstadoEventos />
    </div>
  );
}

export default App;
