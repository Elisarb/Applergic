import BtnDiary from "../../Componentes/Btn-Diary/Btn-Diary"
import BtnFav from "../../Componentes/Btn-Fav/Btn-Fav"
import BtnHome from "../../Componentes/Btn-Home/Btn-Home"
import BtnShare from "../../Componentes/Btn-Share/Btn-Share"

const Diario = () => {
    return (
      <div>
        <h1>DIARIO :)</h1>
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
  
  export default Diario