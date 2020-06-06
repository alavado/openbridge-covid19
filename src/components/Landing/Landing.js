import React from 'react'
import './Landing.css'
import Rombos from './Rombos'
import Navegacion from './Navegacion'
import Miniatura from './Miniatura'
import { useHistory, Switch, Route } from 'react-router'
import Login from './Login'

const Landing = () => {

  const history = useHistory()

  return (
    <div className="Landing">
      <div className="Landing__contenedor">
        <Navegacion />
        <Switch>
          <Route exact path="/" component={() => (
            <div className="Landing__principal">
              <div className="Landing__titulo">
                Gestión Geriátrica en APS basada en un Score Biopsicosocial para emergencias sanitarias
                <button
                  className="Landing__cta"
                  onClick={() => history.push('login')}
                >
                  Ingresar
                </button>
              </div>
              <Miniatura />
            </div>
          )} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      <Rombos />
    </div>
  )
}

export default Landing
