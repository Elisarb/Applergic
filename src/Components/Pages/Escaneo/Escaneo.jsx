import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ScannerC from '../../Componentes/Scaner/ScannerC';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import React, { useContext} from 'react'
import { ApplergicContext } from '../../../Context/context';
import BtnHome from '../../Componentes/Shared/Btn-Home/Btn-Home';
import BtnFav from '../../Componentes/Shared/Btn-Fav/Btn-Fav';
import BtnDiary from '../../Componentes/Shared/Btn-Diary/Btn-Diary';



const Escaneo = () => {
    const navigate = useNavigate()
    const { productos } = useContext(ApplergicContext);
    const [myproduct, setMyproduct]=useState({})
    let idBarcode
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>  {
    idBarcode=(data.barcode)
    console.log(data.barcode)
    console.log(idBarcode);    
    navigate(`/Escaneo/${idBarcode}`)
    }
    productos.map((item)=>{
      if (item._id === idBarcode){
          // productoEscaneado = item;
          setMyproduct(item)
          // console.log(productoEscaneado)
          
      }
  })
    ; 
    return (
    
      <div>
       
        <h1>Escaneando...</h1>
        <p>
          Tan solo tienes que introducir el código de barras del producto en el recuadro.
        </p>
        <ScannerC className="c-scaner"></ScannerC>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Introduce el código" type='number' {...register("barcode", { required: true, minLength:3, maxLength: 16 })}></input>
        <button>Enviar</button>
        </form>
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

  export default Escaneo