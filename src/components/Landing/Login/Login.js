import React from 'react'
import './Login.css'

const Login = () => {

  const login = e => {
    e.preventDefault()
  }

  return (
    <div className="Login">
      <div className="Login__contenedor">
        <div className="Login__logo">Acceso a<br/>GG BIO</div>
        <form className="Login__formulario" onSubmit={login}>
          <div className="Login__campo">
            <label>E-mail</label>
            <input className="Login__input" type="text" />
          </div>
          <div className="Login__campo">
            <label>Contraseña</label>
            <input className="Login__input" type="password" />
          </div>
          <div className="Login__campo">
            <button className="Login__boton" type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
