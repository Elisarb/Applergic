import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import iconoApplergic from '../../../Assets/iconoApplergic.png'
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import './Traductor.scss'
import Español from '../../../Assets/español.svg'
import Ingles from '../../../Assets/ingles.svg'


const Valoraciones = () => {
  const {t, changeLanguaje} =useContext(MyContext);

  return (
    <div className='c-valorationPage'>
        <div className='c-valorationPage__volver'>
            <Link  to={`/Home`}><VolverGlobal/></Link>
        </div>
        <div className='c-valorationPage__logo'>
        <img src={iconoApplergic} alt='iconoApplergic'/>
        <div>
            <img className='c-nav__español' src={Español} alt='Español' onClick={()=>changeLanguaje('es')}></img>
            <img className='c-nav__ingles' src={Ingles} alt='Ingles' onClick={()=>changeLanguaje('en')}></img>
        </div>       
            <h2>{t('idiona')}</h2>
            
        </div>
    </div>
  )
}

export default Valoraciones