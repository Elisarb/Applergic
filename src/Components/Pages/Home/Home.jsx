import React, { useState } from 'react'
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


const Home = () => {
const [open, setOpen] = useState(false);
const navigate = useNavigate()

  const handleClick = () => {
    setOpen(!open);
  };
  
  const Compartir = () => {
    console.log("Compartir")
  }
  const Traducir = () => {
    console.log("Traducir")
  }
  const Términos = () => {
    console.log("Términos")
  }
  const Salir = () => {
    console.log("Salir")
  }

  console.log(open)

  return (
    <div className='Home-total'>
        <div hidden={open? false: true} className="Hamburguesa-Wrap">
            <div className='Hamburguesa-Btn-Caja'open={open}onClick={handleClick}>
                <img className='Hamburguesa-btn' src={ImgX} alt="" /> 
            </div>
            <div className='Hamburguesa-Opciones-Caja'>
                
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> navigate ("/")}>
                    <img className='Hamburguesa-Opcion-img' src={ImgUsuario} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>Perfil</h1>
                </div>
                
                
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> navigate ("/Favoritos")}>
                    <img className='Hamburguesa-Opcion-img' src={ImgUFavorito} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>Favorito</h1>
                </div>
                
                
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> navigate ("/Diario")}>
                    <img className='Hamburguesa-Opcion-img' src={ImgDiario} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>Diario</h1>
                </div>
                
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> Compartir()}>
                    <img className='Hamburguesa-Opcion-img' src={ImgCompartir} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>Compartir</h1>
                </div>
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> Traducir()}>
                    <img className='Hamburguesa-Opcion-img' src={ImgTraductor} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>Traductor</h1>
                </div>
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> Términos()}>
                    <img className='Hamburguesa-Opcion-img' src={ImgTerminos} alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>Términos</h1>
                </div>
                <div className='Hamburguesa-Opcion-Caja' onClick={()=> Salir()}>
                    <img className='Hamburguesa-Opcion-img' src="" alt="" />
                    <h1 className='Hamburguesa-Opcion-txt'>Salir</h1>
                </div>
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
            <BtnGlobal name="Escanear" image={ImgEscanear} class="rgb(38 199 220)"/>
            <p>Escanea un nuevo producto.</p>
            
            <BtnGlobal name="Buscar" image={ImgBuscar} class="rgb(196 196 196)" onClick={()=> navigate ("/Buscar")}/>
            
            <p>Busca un comercio o restaurante para ti.</p>
            <BtnGlobal name="S.O.S." image={ImgSOS} class="rgb(248 73 113)"/>
            <p>¿Necesitas ayuda urgente? contactanos con emergencias.</p>
            </div>

        </div>
        <div className='Home-Footer'>
            <div className='Home-Footer-Caja'>
                <BtnHome></BtnHome>
                <BtnFav></BtnFav>
                <BtnDiary></BtnDiary>
                <BtnShare></BtnShare>
               
            </div>
        </div>
    </div>
  )
}

export default Home