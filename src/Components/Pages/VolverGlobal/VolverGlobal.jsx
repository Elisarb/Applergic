import React, { useContext } from 'react'
import { MyContext } from '../../Componentes/Shared/contexts/MyContext'


import './VolverGlobal.scss'
export const VolverGlobal = (props) => {
  const {t} = useContext(MyContext)

  return (
    <button className='VolverGlobal' style={{backgroundColor: props.class}}><h1> ← {t('volver')}</h1></button>
    
  )
}
