import React from 'react'
import './Inicio.css'
import Mapa from '../Mapa/Mapa'

const Inicio = () => {
  return (
    <div className="Inicio">
      <div className="Inicio__titulo">CESFAM Raúl Cuevas</div>
      <div className="Inicio__mapa">
        <Mapa />
      </div>
    </div>
  )
}

export default Inicio
