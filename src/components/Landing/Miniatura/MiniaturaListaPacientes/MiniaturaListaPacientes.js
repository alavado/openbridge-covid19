import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Icon, InlineIcon } from '@iconify/react'
import seniorIcon from '@iconify/icons-vs/senior'
import './MiniaturaListaPacientes.css'
import { nombreAleatorio } from '../../../helpers/nombres'

axios.defaults.headers.common['X-API-KEY'] = '92f91323e700258c0fb7811bcfd84f'
const categorias = [
  {
    nombre: 'Extremadamente vulnerables',
    color: '#c53c30'
  },
  {
    nombre: 'Muy vulnerables',
    color: '#c58230'
  },
  {
    nombre: 'Vulnerables',
    color: '#c5c030'
  },
  {
    nombre: 'Poco vulnerables',
    color: '#a5c530'
  },
  {
    nombre: 'Sin riesgo actual',
    color: '#55c530'
  }
]

const MiniaturaListaPacientes = () => {

  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    async function fetchPacientes() {
      const pacientesM = await axios.get('https://uifaces.co/api?from_age=60&to_age=100&gender[]=male')
      const pacientesF = await axios.get('https://uifaces.co/api?from_age=60&to_age=100&gender[]=female')
      setPacientes([...pacientesM.data.map(d => ({ ...d, g: 'm' })), ...pacientesF.data.map(d => ({ ...d, g: 'f' }))].map(d => ({
        nombre: nombreAleatorio(d.g),
        foto: d.photo
      })))
    }
    fetchPacientes()
  }, [])

  const pacientesPorCategoria = pacientes.length / categorias.length

  return (
    <div className="MiniaturaListaPacientes">
      {categorias.map((categoria, i) => (
        <div
          className="MiniaturaListaPacientes__contenedor_categoria"
          key={`contenedor-categoria-${i}`}
        >
          <h1
            className="MiniaturaListaPacientes__titulo_categoria"
            style={{ backgroundColor: categoria.color }}
          >
            {categoria.nombre}
          </h1>
          <div className="MiniaturaListaPacientes__categoria">
            {pacientes.slice(i * pacientesPorCategoria, (i + 1) * pacientesPorCategoria).map((p, i) => (
              <div
                key={`miniatura-paciente-${i}`}
                className="MiniaturaListaPacientes__fila"
              >
                <img
                  className="MiniaturaListaPacientes__avatar"
                  src={p.foto}
                  alt={`foto del paciente ${p.nombre}`}
                />
                <div className="MiniaturaListaPacientes__nombre">
                  {p.nombre}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MiniaturaListaPacientes
