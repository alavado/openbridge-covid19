import React from 'react'
import { InlineIcon } from '@iconify/react'
import listHighPriority from '@iconify/icons-cil/list-high-priority'
import './Navegacion.css'
import { useHistory } from 'react-router'

const Navegacion = () => {

  const history = useHistory()

  return (
    <div className="Navegacion">
      <div className="Navegacion__logo" onClick={() => history.push('/')}>
        <div className="Navegacion__nombre"><InlineIcon icon={listHighPriority} /> GG BIO</div>
      </div>
      <nav className="Navegacion__links">
        <div className="Navegacion__link" onClick={() => history.push('/')}>Inicio</div>
        <div className="Navegacion__link">Acerca de</div>
        <div className="Navegacion__link">Colaboradores</div>
        <div className="Navegacion__link" onClick={() => history.push('/login')}>Ingresar</div>
      </nav>
    </div>
  )
}

export default Navegacion
