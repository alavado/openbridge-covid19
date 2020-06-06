import React, { useEffect } from 'react'
import axios from 'axios'
import { Icon, InlineIcon } from '@iconify/react';
import seniorIcon from '@iconify/icons-vs/senior';
import './Miniatura.css'

axios.defaults.headers.common['X-API-KEY'] = '92f91323e700258c0fb7811bcfd84f'

// Extremadamente vulnerable
// Muy vulnerable
// vulnerable
// poco vulnerable
// sin riesgo actua

const Miniatura = () => {

  useEffect(() => {
    axios.get('https://uifaces.co/api?from_age=50&to_age=100')
     .then(res => console.log(res))
  }, [])

  return (
    <div className="Miniatura">
      <div className="Miniatura__barra">
        <div className="Miniatura__botones">
          <div className="Miniatura__boton"></div>
          <div className="Miniatura__boton"></div>
          <div className="Miniatura__boton"></div>
        </div>
        <div className="Miniatura__titulo">GG BIO</div>
      </div>
      {/* <InlineIcon icon={seniorIcon} /> */}
    </div>
  )
}

export default Miniatura
