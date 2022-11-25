import Img1 from '../../../Assets/Fav-Prueba.png'
import BtnDiary from '../../Componentes/Shared/Btn-Diary/Btn-Diary'
import BtnFav from '../../Componentes/Shared/Btn-Fav/Btn-Fav'
import BtnHome from '../../Componentes/Shared/Btn-Home/Btn-Home'
import BtnShare from '../../Componentes/Shared/Btn-Share/Btn-Share'
const Fav = () => {
    return (
      <div>
        <img src={Img1} alt="" />
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
  
  export default Fav