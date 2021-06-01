import './Vista/css/App.css';

import NavVar from './Componentes/NavVar'
import Router from './Router'

function App() {
  return (
    <div className="App">
      <NavVar 
        titulo = 'Ejemplo React'
        enlance_1 = 'Home'
        url_1 = '/'
        target_1 = ''
        enlance_2 = 'Usos'
        url_2 = 'usos'
        target_2 = ''
        enlance_3 = 'Más sobre React'
        url_3 = 'https://reactjs.org'
        target_3 = '_blank'
      />
      <main>
        <Router/>
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yadir puto.
        </p>
        <Icono class = 'Derecha' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
