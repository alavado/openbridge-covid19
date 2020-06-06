import React from 'react'
import './Navegacion.css'

const Navegacion = () => {
  return (
    <div className="Navegacion">
      <div className="Navegacion__logo">
        <div className="Navegacion__nombre">GG BIO</div>
      </div>
      <nav className="Navegacion__links">
        <div className="Navegacion__link">Inicio</div>
        <div className="Navegacion__link">Acerca de</div>
        <div className="Navegacion__link">Colaboradores</div>
        <div className="Navegacion__link">Ingresar</div>
      </nav>
    </div>
  )
}

export default Navegacion
