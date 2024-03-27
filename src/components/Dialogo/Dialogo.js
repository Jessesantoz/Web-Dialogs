import React, { Component } from 'react';
import './Dialogo.css';


import Comentario from '../Comentario/Comentario'


class Dialogo extends Component {

  state = {
    comentarios: [
      {
        nome: 'Platão',
        email: 'joao@mail.com',
        data: new Date(2020, 3, 19, 17, 30, 0),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Aristótelis',
        email: 'pedro@mail.com',
        data: new Date(2020, 3, 22, 12, 15, 0),
        mensagem: 'Olá, tudo bem sim....'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  render() {
    return (
      <div className="App">
        <img className='logotipo' src='/pensador.svg' />
        <h1>Discussão sobre a natureza humana</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

      </div>
    );
  }
}

export default Dialogo;