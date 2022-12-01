import './DiarioLocal.scss';
import Img1 from '../../../Assets/Btn-Diario.png';
import Img2 from '../../../Assets/Btn-X.png';
import Img3 from '../../../Assets/Btn-Editar.png'
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { BtnGlobal } from '../../Componentes/Shared/BtnGlobal/BtnGlobal';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { useNavigate } from 'react-router-dom';

const DiarioLocal = () => {
    
    
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
        }

    ]
    
    return (
      <div className='DiarioLocal-total'>
        <div className='DiarioLocal-Caja-Header'>
            <div className='DiarioLocal-Header-Caja-btn'onClick={()=> navigate ("/DiarioGlobal")} >
                <img className='DiarioLocal-Header-img' src={Img1} alt="" />
            </div>
            <div className='DiarioLocal-Header-Caja-btn'>
                <img className='DiarioLocal-Header-img' src={Img2} alt="" />
            </div>
        </div>

        <div className='DiarioLocal-Titulo'>
            <div className='DiarioLocal-Titulo-1'><h1>¿Incluimos la selección en tu Diario?</h1></div>
            <div className='DiarioLocal-Titulo-2'><p>Añade comentarios completar tu información</p></div>  
        </div>

        <div className='DiarioLocal-Contenido'><SimpleBarReact style={{maxHeight:390}}>
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
        
        <BtnGlobal2 type="submit" name="Guardar" class="rgb(38 199 220)" />
        
      </div>
    )
  }
  
  export default DiarioLocal
  //onClick={()=> navigate ("/DiarioGlobal")}