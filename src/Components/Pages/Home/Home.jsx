import React, { useContext, useState } from 'react'
import BtnDiary from '../../Componentes/Shared/Btn-Diary/Btn-Diary'
import BtnFav from '../../Componentes/Shared/Btn-Fav/Btn-Fav'
import BtnHome from '../../Componentes/Shared/Btn-Home/Btn-Home'
import BtnShare from '../../Componentes/Shared/Btn-Share/Btn-Share'
import ImgHome from '../../../Assets/Imagen-Home.png'
import ImgMenú from '../../../Assets/Menú-Home.png'
import ImgInfo from '../../../Assets/info-Home.png'
import ImgEscanear from '../../../Assets/Escanear.png'
import ImgBuscar from '../../../Assets/Buscar.png'
import ImgSOS from '../../../Assets/SOS.png'
import ImgUsuario from '../../../Assets/Btn-Usuario.png'
import ImgUFavorito from '../../../Assets/Btn-Fav-Inactive.png'
import ImgDiario from '../../../Assets/Btn-Diary-Inactive.png'
import ImgCompartir from '../../../Assets/Btn-Share.png'
import ImgTraductor from '../../../Assets/Btn-Traducir.png'
import ImgTerminos from '../../../Assets/Btn-Terminos.png'
import ImgX from '../../../Assets/Btn-X.png'
import './Home.scss'
import { BtnGlobal } from '../../Componentes/Shared/BtnGlobal/BtnGlobal'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Componentes/Shared/contexts/MyContext'
import AuthButton from '../../Componentes/Shared/components/AuthButton/AuthButton'


const Home = () => {
const {t} = useContext(MyContext)

const [open, setOpen] = useState(false);
const [open2, setOpen2] = useState(false);
const navigate = useNavigate()

  const handleClick = () => {
    setOpen(!open);
    if(open === true && open2 === true){
        setOpen2(!open2);
    }

    
  };
  const handleClick2 = () => {
    setOpen2(!open2);

  };
  console.log("1"+open)
  console.log("2"+open2)
  
  const Traducir = () => {
    console.log("Traducir")
  }
  const Términos = () => {
    console.log("Términos")
  }
  const Salir = () => {
    console.log("Salir")
  }

  

  return (
    <div className='Home-total'>
        <div hidden={open? false: true} className="Hamburguesa-Wrap">
            <div className='Hamburguesa-Btn-Caja'open={open}onClick={handleClick}>
                <img className='Hamburguesa-btn' src={ImgX} alt="" /> 
            </div>
            <div className='Hamburguesa-Opciones-Caja'>
                
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> navigate ("/")}>
                    <img className='Hamburguesa-Opcion-img' src={ImgUsuario} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>{t('perfil')}</h1>
                </div>
                
                
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> navigate ("/Favoritos")}>
                    <img className='Hamburguesa-Opcion-img' src={ImgUFavorito} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>{t('favorito')}</h1>
                </div>
                
                
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> navigate ("/DiarioGlobal")}>
                    <img className='Hamburguesa-Opcion-img' src={ImgDiario} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>{t('salir')}Diario</h1>
                </div>
                
                <div className='Hamburguesa-Opcion-Caja' onClick={handleClick2}>
                    <img className='Hamburguesa-Opcion-img' src={ImgCompartir} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>{t('compartir')}</h1>
                </div>
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> Traducir()}>
                    <img className='Hamburguesa-Opcion-img' src={ImgTraductor} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>{t('traductor')}</h1>
                </div>
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> Términos()}>
                    <img className='Hamburguesa-Opcion-img' src={ImgTerminos} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>{t('terminos')}</h1>
                </div>
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> Salir()}>
                    <img className='Hamburguesa-Opcion-img' src="" alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>{t('salir')}</h1>
                    <AuthButton/>
                </div>
            </div>
        </div>

        <div hidden={open2? false: true} className="Compartir-Wrap">
            
            <div className='Compartir-Opciones-Caja'>
                <h1>{t('compartircon')}</h1>
                <div className='Compartir-Opciones-Usuarios'>
                <img src={ImgUsuario} alt="" />
                <img src={ImgUsuario} alt="" />
                <img src={ImgUsuario} alt="" />
                <img src={ImgUsuario} alt="" />
                </div>
            </div>
            <div className='Compartir-Btn-Caja'open={open2}onClick={handleClick2}>
                <img className='Compartir-btn' src={ImgX} alt="" /> 
            </div>
        </div>

        <div className='Home-Header'>
            <div className='Home-Header-Header'>
            <div className='Home-Header-Caja'><img className='Home-Header-img' src={ImgMenú} alt="" onClick={handleClick} /></div>
            <div className='Home-Header-Caja'><img className='Home-Header-img' src={ImgInfo} alt="" /></div>
            </div>
        </div>
        <div className='Home-Main'>

            <div className='Home-Main-Caja-Arriba'>
                <div className='Home-Main-Caja-caja'>
                    <img className='Home-Main-img' src={ImgHome} alt="" />
                </div>
            </div>

            <div className='Home-Main-Caja-Abajo'>
            <a className='btnHome' onClick={()=> navigate("/Escaneo")}>
            <BtnGlobal name={t('escanear')} image={ImgEscanear} class="rgb(38 199 220)"/>
            </a>
            <p>{t('escanearTexto')}</p>
            <a className='btnHome' onClick={()=> navigate("/Buscar")}>
            <BtnGlobal name={t('buscar')} image={ImgBuscar} class="rgb(196 196 196)"/>
            </a>
            <p>{t('buscarTexto')}</p>
            <BtnGlobal name={t('btnSOS')} image={ImgSOS} class="rgb(248 73 113)"/>
            <p>{t('sos')}</p>
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

export default Home