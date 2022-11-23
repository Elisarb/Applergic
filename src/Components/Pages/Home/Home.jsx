import React from 'react'
import BtnDiary from '../../Componentes/Btn-Diary/Btn-Diary'
import BtnFav from '../../Componentes/Btn-Fav/Btn-Fav'
import BtnHome from '../../Componentes/Btn-Home/Btn-Home'
import BtnShare from '../../Componentes/Btn-Share/Btn-Share'
import Img1 from '../../../Assets/Imagen-Home.png'
import Img2 from '../../../Assets/Menú-Home.png'
import Img3 from '../../../Assets/info-Home.png'
import './Home.scss'

const Home = () => {
  return (
    <div className='Home-total'>
        <div className='Home-Header'>
            <div className='Home-Header-Header'>
            <div className='Home-Header-Caja'><img className='Home-Header-img' src={Img2} alt="" /></div>
            <div className='Home-Header-Caja'><img className='Home-Header-img' src={Img3} alt="" /></div>
            </div>
        </div>
        <div className='Home-Main'>

            <div className='Home-Main-Caja-Arriba'>
                <img className='Home-Main-img' src={Img1} alt="" />
            </div>

            <div className='Home-Main-Caja-Abajo'>
                
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