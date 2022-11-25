import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import iconoApplergic from '../../../Assets/iconoApplergic.png'
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import HoverRating from '../../Componentes/Shared/Estrellas/HoverRating';
import './Valoraciones.scss'



const Valoraciones = () => {
  const navigate = useNavigate()
  return (
    <div className='c-valorationPage'>
        <div className='c-valorationPage__volver'>
            <Link  to={`/Escaneo`}>Volver</Link>
        </div>
        <div className='c-valorationPage__logo'>
            <img src={iconoApplergic} alt='iconoApplergic'/>
            <h2>¡Gracias por usar Applergic!</h2>
            <h2>Por favor, evalua tu experiencia.</h2>
            <HoverRating ></HoverRating>
        </div>
        
        <BtnGlobal2 type="submit" name="Enviar sugerencias" color="#26c7dc" class="transparent" border="none" onClick={()=> navigate ("/Home")}/>
      
    </div>
  )
}

export default Valoraciones