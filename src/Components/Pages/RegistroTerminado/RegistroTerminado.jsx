
import { Link } from 'react-router-dom';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import "./RegistroTerminado.scss"
import good from '../../../Assets/good.png'
import x from '../../../Assets/x.png'
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';
import { useContext } from 'react';
export default function RegistroTerminado(){
  
  const {t} = useContext(MyContext)

  function nextpage(){
    window.location.href = "/escaneo";
  }


    return (

      <>     
      <div className='arribaas'>
      <div className='top-top-2'>
      <Link to="/Emergencias">
            <VolverGlobal/>
       </Link>
      <p>4 {t('de')} 4</p>
      <Link to="/Emergencias">
            <VolverGlobal/>
       </Link>
      
       <Link to="/Home">
        <img  className='x-img' src={x}/>
        </Link>
      </div>
      </div>
      <div className='allgood'>
      <img  className='good-img' src={good}/>
      <h1>{t('terminado')}</h1>
      </div>
        <div className='qq'> 
        <a href="/escaneo">
        <BtnGlobal2 type="submit" name={t('escaneaproduct')} class="rgb(38 199 220)"/>
        </a>
        </div>
        </>
       
    )
}

