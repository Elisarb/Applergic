import React from 'react'
import { useContext } from 'react'
import './Portada.scss'
import Img1 from '../../../Assets/Texto-Portada.png'
import Img2 from '../../../Assets/Imagen-Portada.png'
import { MyContext } from "../../../Components/Componentes/Shared/contexts/MyContext";
import { ApplergicContext } from "../../../Context/context";


const Portada = () => {
  const { usuario } = useContext(ApplergicContext);
  const info = usuario._id;
  let loggedIn= false;

  function Redirect(){
    if(info == undefined){
    setTimeout(function(){ 
      window.location.href = "/bienvenida";
    },3000);
  }else{
    setTimeout(function(){ 
      window.location.href = "/Home";
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