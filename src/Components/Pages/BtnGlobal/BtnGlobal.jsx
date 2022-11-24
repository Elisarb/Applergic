import React from 'react'


import './BtnGlobal.scss'
export const BtnGlobal = (props) => {
  return (
    <button className='BtnGlobal' style={{backgroundColor: props.class}}><div className='BtnGlobalDiv'><img className='BtnGlobal-img' src={props.image} alt="" /><h1 className='BtnGlobaltxt'>{props.name}</h1></div></button>
    
  )
}
