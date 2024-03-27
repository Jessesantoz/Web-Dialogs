import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

//import NovoComentario from "./components/NovoComentario/NovoComentario"
//import Comentario from "./components/Comentario/Comentario"
import Apresentacao from "./components/Apresentacao/Apresentacao"


function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/Apresentacao'>Início</Link>
              </li>
              <li>
                <Link to='/'>Novo Diálogo</Link>
              </li>
              <li>
                <Link to='/'>Diálogos</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/Apresentacao">
              <Apresentacao/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>

  )
}

export default App;
