
import { Link } from 'react-router-dom';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import "./RegistroTerminado.scss"
import good from '../../../Assets/good.png'
import x from '../../../Assets/x.png'
export default function RegistroTerminado(){
 

    return (

      <>     
      <div className='arribaas'>
      <div className='top-top-2'>
      <Link to="/Emergencias">
            <VolverGlobal/>
       </Link>
      <p>4 de 4</p>
      <img  className='x-img' src={x}/>
      </div>
      </div>
      <div className='allgood'>
      <img  className='good-img' src={good}/>
      <h1>Hemos terminado, ya puedes escanear tu primer producto.</h1>
      </div>
        <div className='qq'> 
        <BtnGlobal2 type="submit" name="Escanea un Producto" class="rgb(38 199 220)"/>
        </div>
        </>
       
    )
}

