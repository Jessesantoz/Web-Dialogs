import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import NovoComentario from "./components/NovoComentario/NovoComentario"
import Dialogo from "./components/Dialogo/Dialogo"
import Apresentacao from "./components/Apresentacao/Apresentacao"
import Perfil from "./components/Perfil/Perfil"

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/Apresentacao'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/Dialogo'>Diálogos</NavLink>
              </li>
              <li>
                <NavLink to='/NovoComentario'>Novo Diálogo</NavLink>
              </li>
              <li>
                <NavLink to='/Perfil'>Perfil</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/Apresentacao">
              <Apresentacao/>
            </Route>
            <Route path="/Dialogo">
              <Dialogo/>
            </Route>
            <Route path="/NovoComentario">
              <NovoComentario/>
            </Route>
            <Route path="/Perfil">
              <Perfil/>
            </Route>
            <Route path="*">
              <PagNaoEncontrada/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    )
  }

    function PagNaoEncontrada() {
      return <> 
      <h1>404</h1>
      <p>Página não encontrada</p>
      </>
    }


export default App;
