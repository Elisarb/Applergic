import React from 'react'


import './BtnGlobal2.scss'
export const BtnGlobal2 = (props) => {
  return (
    <button className='BtnGlobal2' style={{backgroundColor: props.class,color:props.color, border:props.border}}><h1 className='BtnGlobaltxt2'>{props.name}</h1></button>
    
  )
}
