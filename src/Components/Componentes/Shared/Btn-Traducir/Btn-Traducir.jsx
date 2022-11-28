
import img1 from '../../../../Assets/Btn-Traducir.png'
import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { useNavigate } from 'react-router-dom';

const BtnTraducir = () => {
    const {t} = useContext(MyContext)
    const navigate = useNavigate()
    return(
        <button onClick={()=> navigate ("/Traductor")} className='PERFIL-BTN-CAJA'>
        <img className='PERFIL-BTN-IMG' src={img1} alt="" />
        {t('traductor')}
    </button>
        
    )
}
export default BtnTraducir