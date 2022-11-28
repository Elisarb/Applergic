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
  console.log(info)

  function Redirect(){
    // console.log(info)


  //   if(info !== undefined){
  //     console.log("porque SI estabas loggeado");
  //     window.location.href = "/Home";   
  // }else if(info === undefined){
  //   window.location.href = "/bienvenida"
  //   console.log("porque no estabas loggeado");
  // }
  }


  setTimeout(function(){ 
    Redirect()
  },6000)
  
  

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