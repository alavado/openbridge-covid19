import React from 'react'
import Rombos from '../Landing/Rombos'
import { InlineIcon } from '@iconify/react'
import listHighPriority from '@iconify/icons-cil/list-high-priority'
import './Dashboard.css'
import Lateral from './Lateral'
import { Switch, Route, useHistory } from 'react-router'
import Mapa from './Mapa'
import ListaPacientes from './ListaPacientes'

const Dashboard = () => {

  const history = useHistory()

  return (
    <div className="Dashboard">
      <Rombos desaparecen={true} />
      <div className="Dashboard__barra">
        <div className="Dashboard__logo">
          <div className="Dashboard__logo_nombre" onClick={() => history.push('/dashboard/inicio')}>
            <InlineIcon className="Dashboard__logo_icono" icon={listHighPriority} /> GG BIO
          </div>
        </div>
        <div className="Dashboard__barra_usuario">
          Nombre usuario
        </div>
      </div>
      <div className="Dashboard__contenido">
        <Lateral />
        <div className="Dashboard__principal">
          <Switch>
            <Route path="/dashboard/inicio" component={Mapa} />
            <Route path="/dashboard/pacientes" component={ListaPacientes} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
