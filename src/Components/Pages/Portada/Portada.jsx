import React from 'react'
import './Portada.scss'
import Img1 from '../../../Assets/Texto-Portada.png'
import Img2 from '../../../Assets/Imagen-Portada.png'

const Portada = () => {
  let loggedIn= false;

  function Redirect(){
    if(loggedIn === false){
    setTimeout(function(){ 
      window.location.href = "/Bienvenida";
    },3000);
  }
  }

  Redirect()
  

  return (
    <div className='Portada-total'>
        <div className='Portada-arriba'>
            <img className='Portada-img1' src={Img1} alt="" />
        </div>
        <div className='Portada-abajo'>
            <img className='Portada-img2' src={Img2} alt="" />
        </div>
    </div>
  )
}

export default Portada