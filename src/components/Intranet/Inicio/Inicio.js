import React from 'react'
import './Inicio.css'
import Mapa from '../Mapa/Mapa'

const Inicio = () => {
  return (
    <div className="Inicio">
      <div className="Inicio__prioritarios">
        Pacientes prioritarios
      </div>
      <div className="Inicio__mapa">
        <Mapa />
      </div>
    </div>
  )
}

export default Inicio
