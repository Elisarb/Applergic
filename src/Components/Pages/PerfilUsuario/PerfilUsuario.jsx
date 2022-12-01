import './PerfilUsuario.scss'
import { useContext } from 'react'
import { ApplergicContext } from "../../../Context/context";
import BtnHome from '../../Componentes/Shared/Btn-Home/Btn-Home';
import BtnFav from '../../Componentes/Shared/Btn-Fav/Btn-Fav';
import BtnDiary from '../../Componentes/Shared/Btn-Diary/Btn-Diary';
import camara from '../../../Assets/camara.png'
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
const PerfilUsuario = () => {

    const { usuario } = useContext(ApplergicContext);
    console.log(usuario)
    const fecha = usuario.createdAt.substring(10, -1)
    console.log(fecha)
    const alergenos = usuario.allergens;
    console.log(alergenos)
    return (
      <div className='PerfilUsuario-total'>
          <div className='PerfilUsuario-Caja-img'>
            <img hidden={usuario.userImage=== ""? false: false} className='PerfilUsuario-img' src={camara} alt="" />
                <img hidden={usuario.userImage=== ""? true: true} className='PerfilUsuario-img' src={usuario.userImage} alt="" />
                
          </div>
          <div className='PerfilUsuario-Caja-Info'>
            <div className='PerfilUsuario-Caja-Info-nombre'>
                <h1 className='PerfilUsuario-nombre-titulo'>NOMBRE</h1>
                <h1 className='PerfilUsuario-nombre'>{usuario.userName}</h1>
            </div>
            <div className='PerfilUsuario-Caja-Info-email'>
                <h1 className='PerfilUsuario-email-titulo'>EMAIL</h1>
                <h1 className='PerfilUsuario-email'>{usuario.userMail}</h1>
            </div>
            <div className='PerfilUsuario-Caja-Info-email'>
                <h1 className='PerfilUsuario-email-titulo'>TLF</h1>
                <h1 className='PerfilUsuario-email'>(+34){usuario.userPhone}</h1>
            </div>
            <div className='PerfilUsuario-Caja-tiempo'>
            <h1 className='PerfilUsuario-tiempo'>Miembro desde: {fecha}</h1>
          </div>
          <div className='PerfilUsuario-Caja-alergenos'><SimpleBarReact style={{maxHeight:90}}>
            {alergenos.map((alergeno, index)=>
            <div className='PerfilUsuario-Caja-alergeno' key={index}>
              <h1 className='PerfilUsuario-alergeno-txt'>{alergeno.allergensName}</h1>
            </div>
            )}</SimpleBarReact>
             
          </div>
          </div>
          
          <div className='Home-Footer'>
            <div className='Home-Footer-Caja'>
                <BtnHome></BtnHome>
                <BtnFav></BtnFav>
                <BtnDiary></BtnDiary>
            </div>
        </div>
      </div>
    )
  }
  
  export default PerfilUsuario