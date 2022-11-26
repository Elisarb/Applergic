import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import iconoApplergic from '../../../Assets/iconoApplergic.png'
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';
import HoverRating from '../../Componentes/Shared/HoverRating/HoverRating';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import './Valoraciones.scss'



const Valoraciones = () => {
  const {t} = useContext(MyContext)

  const navigate = useNavigate()
  return (
    <div className='c-valorationPage'>
        <div className='c-valorationPage__volver'>
            <Link  to={`/Escaneo`}><VolverGlobal/></Link>
        </div>
        <div className='c-valorationPage__logo'>
            <img src={iconoApplergic} alt='iconoApplergic'/>
            <h2>{t('gracias')}</h2>
            <h2>{t('porFavor')}</h2>
            <HoverRating ></HoverRating>
        </div>
        <a onClick={()=> navigate("/Home")}>
        <BtnGlobal2 type="submit" name={t('sugerencias')} color="#26c7dc" class="transparent" border="none" />
        </a>
    </div>
  )
}

export default Valoraciones