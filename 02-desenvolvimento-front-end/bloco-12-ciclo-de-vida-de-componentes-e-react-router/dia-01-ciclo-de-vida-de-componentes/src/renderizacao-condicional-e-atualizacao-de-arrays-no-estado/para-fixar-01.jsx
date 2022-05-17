// src/App.js
import React from 'react';
import './parafixar01.css';
import Profile from './para-fixar-01-profile';
import Connections from './para-fixar-01-connections';

class ParaFixar01 extends React.Component {
  constructor() {
    // 💡 me preencha!
    super();

    this.state = {
      showProfile: true,
    }

    this.changeProfile = this.changeProfile.bind(this);
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    // 💡 está faltando algo aqui!
    const { showProfile } = this.state;

  return(
      <div className="gitNetwork d-flex flex-column justify-content-center" >
      { showProfile?<Profile /> : null}
          <div className="central d-flex justify-content-center">
            <button
              className="btn btn-dark align-self-center"
              type="button"
              onClick={ this.changeProfile }
            >
              Mostrar / Ocultar Perfil
            </button>
          </div>
          <Connections />
      </div>
    );
  }
}

export default ParaFixar01;
