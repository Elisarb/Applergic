import React from 'react'


import './BtnGlobal.scss'
export const BtnGlobal = (props) => {
  return (
    <button className='BtnGlobal' style={{backgroundColor: props.class}}><img className='BtnGlobal-img' src={props.image} alt="" /><h1>{props.name}</h1></button>
    
  )
}
