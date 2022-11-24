import Img1 from '../../../Assets/Fav-Prueba.png'
import BtnDiary from '../../Componentes/Btn-Diary/Btn-Diary'
import BtnFav from '../../Componentes/Btn-Fav/Btn-Fav'
import BtnHome from '../../Componentes/Btn-Home/Btn-Home'
import BtnShare from '../../Componentes/Btn-Share/Btn-Share'
const Fav = () => {
    return (
      <div>
        <img src={Img1} alt="" />
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
  
  export default Fav