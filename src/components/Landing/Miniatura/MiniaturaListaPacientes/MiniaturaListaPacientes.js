import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Icon, InlineIcon } from '@iconify/react'
import seniorIcon from '@iconify/icons-vs/senior'
import './MiniaturaListaPacientes.css'

axios.defaults.headers.common['X-API-KEY'] = '92f91323e700258c0fb7811bcfd84f'

const MiniaturaListaPacientes = () => {

  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    axios.get('https://uifaces.co/api?from_age=60&to_age=100')
     .then(res => {
       console.log(res.data)
       setPacientes(res.data.map(d => ({
         nombre: d.name,
         foto: d.photo
       })))
     })
  }, [])

  return (
    <div className="MiniaturaListaPacientes">
      <h1>Pacientes Extremadamente vulnerables</h1>
      <div className="MiniaturaListaPacientes__categoria">
        {pacientes.map((p, i) => (
          <div
            key={`miniatura-paciente-${i}`}
            className="MiniaturaListaPacientes__fila"
          >
            <img
              className="MiniaturaListaPacientes__avatar"
              src={p.foto}
              alt={`foto del paciente ${p.nombre}`}
            />
            {p.nombre}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniaturaListaPacientes
