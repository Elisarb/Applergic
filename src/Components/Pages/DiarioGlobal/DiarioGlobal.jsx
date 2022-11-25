import BtnDiary from "../../Componentes/Shared/Btn-Diary/Btn-Diary"
import BtnFav from "../../Componentes/Shared/Btn-Fav/Btn-Fav"
import BtnHome from "../../Componentes/Shared/Btn-Home/Btn-Home"
import BtnShare from "../../Componentes/Shared/Btn-Share/Btn-Share"

const DiarioGlobal = () => {
    return (
      <div>
        <h1>DIARIO Global</h1>
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
  
  export default DiarioGlobal