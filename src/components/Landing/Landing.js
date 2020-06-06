import React from 'react'
import './Landing.css'
import Rombos from './Rombos'
import Navegacion from './Navegacion'
import Miniatura from './Miniatura'

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Landing__contenedor">
        <Navegacion />
        <div className="Landing__principal">
          <div className="Landing__titulo">
            Gestión Geriátrica en APS basada en un Score Biopsicosocial para emergencias sanitarias
            <button className="Landing__cta">Ingresar</button>
          </div>
          <Miniatura />
        </div>
      </div>
      <Rombos />
    </div>
  )
}

export default Landing
