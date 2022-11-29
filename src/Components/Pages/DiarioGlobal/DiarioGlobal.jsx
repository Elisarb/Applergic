import BtnDiary from "../../Componentes/Shared/Btn-Diary/Btn-Diary"
import BtnFav from "../../Componentes/Shared/Btn-Fav/Btn-Fav"
import BtnHome from "../../Componentes/Shared/Btn-Home/Btn-Home"
import Img1 from '../../../Assets/Btn-Diario.png';
import Img2 from '../../../Assets/Btn-X.png';
import Img3 from '../../../Assets/Btn-Editar.png'
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useNavigate } from "react-router-dom"
import { ApplergicContext } from "../../../Context/context";
import { useContext } from 'react';
import { MyContext } from "../../Componentes/Shared/contexts/MyContext";
const DiarioGlobal = () => {
    const {t} = useContext(MyContext)
  const navigate = useNavigate()
  let products = [];
  const { productos } = useContext(ApplergicContext);
  /*productos.map((item)=>
    {return(
        productos.push(item)
        
    )})*/
    // console.log(productos)
    return (
      <div className='DiarioLocal-total'>
        

        <div className='DiarioLocal-Titulo'>
            <div className='DiarioLocal-Titulo-1'><h1>{t('diarioH1')}</h1></div>
            
        </div>

        <div className='DiarioLocal-Contenido'><SimpleBarReact style={{maxHeight:520}}>
            {productos.map((Producto, index)=> 
            <div className='DiarioLocal-Producto' key={index}>

                <div className='DiarioLocal-Producto-img-caja'>
                    <img className='DiarioLocal-Producto-img' src={Producto.productImage} alt="" />
                </div>
                <div className='DiarioLocal-Producto-datos-caja'>
                    <h1 className='DiarioLocal-Producto-datos-fecha'>{Producto.createdAt}</h1>
                    <h1 className='DiarioLocal-Producto-datos-nombre'>{Producto.productName}</h1>
                    <SimpleBarReact style={{maxHeight:50}}>
                    <p className='DiarioLocal-Producto-datos-notas'>{Producto.ingredients}</p></SimpleBarReact>
                </div>
                <div className='DiarioLocal-Producto-btns-caja'>
                    <div className='DiarioLocal-Producto-btn'>
                       
                    </div>
                    <div className='DiarioLocal-Producto-btn'>
                        
                    </div>
                </div>

            </div>
            )}</SimpleBarReact>
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
  
  export default DiarioGlobal
  