import { useContext } from 'react'
import { ApplergicContext } from "../../../Context/context";
import Img1 from '../../../Assets/Fav-Prueba.png'
import BtnDiary from '../../Componentes/Shared/Btn-Diary/Btn-Diary'
import BtnFav from '../../Componentes/Shared/Btn-Fav/Btn-Fav'
import BtnHome from '../../Componentes/Shared/Btn-Home/Btn-Home'
import BtnShare from '../../Componentes/Shared/Btn-Share/Btn-Share'
const Fav = () => {
  
  const { usuario } = useContext(ApplergicContext);
  console.log(usuario)

    return (
      <div>
        <img src={usuario.userImage} alt="" />
        <h1>{usuario.userName}</h1>
        <h1>{usuario.userMail}</h1>
        <h1>{usuario.allergens}</h1>
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