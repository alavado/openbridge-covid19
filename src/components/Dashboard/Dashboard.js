import React from 'react'
import Rombos from '../Landing/Rombos'
import { InlineIcon } from '@iconify/react'
import listHighPriority from '@iconify/icons-cil/list-high-priority'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Rombos desaparecen={true} />
      <div className="Dashboard__barra">
        <div className="Dashboard__logo">
          <div className="Dashboard__logo_nombre">
            <InlineIcon className="Dashboard__logo_icono" icon={listHighPriority} /> GG BIO
          </div>
        </div>
        <div className="Dashboard__barra_usuario">
          Nombre usuario
        </div>
      </div>
    </div>
  )
}

export default Dashboard
