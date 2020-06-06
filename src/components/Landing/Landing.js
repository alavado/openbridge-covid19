import React from 'react'
import './Landing.css'
import Rombos from './Rombos'
import Navegacion from './Navegacion'

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Landing__contenedor">
        <Navegacion />
      </div>
      <Rombos />
    </div>
  )
}

export default Landing
