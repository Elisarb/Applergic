import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ScannerC from '../../Componentes/Scaner/ScannerC';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';



const Escaneo = () => {
    const navigate = useNavigate()
    let idBarcode
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>  {
    idBarcode=(data.barcode)
    console.log(data.barcode)
    console.log(idBarcode);
    
    navigate(`/Escaneo/${idBarcode}`)
  }; 
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
      </div>
    )
  }
  
  export default Escaneo