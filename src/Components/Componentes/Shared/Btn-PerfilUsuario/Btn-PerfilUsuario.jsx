import './Btn-PerfilUsuario.scss';
import img1 from '../../../../Assets/Btn-Usuario.png'
import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { useNavigate } from 'react-router-dom';

const BtnPerfilUsuario = () => {
    const {t} = useContext(MyContext)
    const navigate = useNavigate()
    return(
        <button onClick={()=> navigate ("/PerfilUsuario")} className='PERFIL-BTN-CAJA'>
        <img className='PERFIL-BTN-IMG' src={img1} alt="" />
        {t('perfil')}
    </button>
        
    )
}
export default BtnPerfilUsuario