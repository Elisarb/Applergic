import BtnDiary from "../../Componentes/Shared/Btn-Diary/Btn-Diary"
import BtnFav from "../../Componentes/Shared/Btn-Fav/Btn-Fav"
import BtnHome from "../../Componentes/Shared/Btn-Home/Btn-Home"
import BtnShare from "../../Componentes/Shared/Btn-Share/Btn-Share"
import { BtnGlobal2 } from "../../Componentes/Shared/BtnGlobal2/BtnGlobal2"
import Img1 from '../../../Assets/Btn-Diario.png';
import Img2 from '../../../Assets/Btn-X.png';
import Img3 from '../../../Assets/Btn-Editar.png'
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useNavigate } from "react-router-dom"

const DiarioGlobal = () => {
  const navigate = useNavigate()
  const ProductosPrueba = [
    {
    img: Img2,
    Nombre: "Choco",
    Fecha: "Hoy",
    Notas: "Producto"
    },
    {
    img: Img1,
    Nombre: "bhdkfjksjndfjkljf",
    Fecha: "Hoy",
    Notas: "Producto"
    },
    {
    img: Img2,
    Nombre: "ChocoLatee",
    Fecha: "Hoy",
    Notas: "Producto"
    },
    {
    img: Img2,
    Nombre: "ChocoLatdsadfesdee",
    Fecha: "Hoy",
    Notas: "Producto"
    },
    {
    img: Img1,
    Nombre: "bhdkfjksjndfjkljf",
    Fecha: "Hoy",
    Notas: "Producto"
    },
    {
    img: Img2,
    Nombre: "ChocoLatee",
    Fecha: "Hoy",
    Notas: "Producto"
    },
    {
    img: Img2,
    Nombre: "ChocoLatdsadfesdee",
    Fecha: "Hoy",
    Notas: "Producto"
    }

]
    return (
      <div className='DiarioLocal-total'>
        

        <div className='DiarioLocal-Titulo'>
            <div className='DiarioLocal-Titulo-1'><h1>TU DIARIO DE PRODUCTOS</h1></div>
            
        </div>

        <div className='DiarioLocal-Contenido'><SimpleBarReact style={{maxHeight:520}}>
            {ProductosPrueba.map((Producto, index)=> 
            <div className='DiarioLocal-Producto' key={index}>

                <div className='DiarioLocal-Producto-img-caja'>
                    <img className='DiarioLocal-Producto-img' src={Producto.img} alt="" />
                </div>
                <div className='DiarioLocal-Producto-datos-caja'>
                    <h1 className='DiarioLocal-Producto-datos-fecha'>{Producto.Fecha}</h1>
                    <h1 className='DiarioLocal-Producto-datos-nombre'>{Producto.Nombre}</h1>
                    
                    <p className='DiarioLocal-Producto-datos-notas'>{Producto.Notas}</p>
                </div>
                <div className='DiarioLocal-Producto-btns-caja'>
                    <div className='DiarioLocal-Producto-btn'>
                        <img className='DiarioLocal-Producto-btn-img' src={Img2} alt="" />
                    </div>
                    <div className='DiarioLocal-Producto-btn'>
                        <img className='DiarioLocal-Producto-btn-img' src={Img3} alt="" />
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
  