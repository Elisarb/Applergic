import React from 'react'
import { useForm } from "react-hook-form";
import "./RegistroAlergias.scss"
import { useNavigate } from 'react-router-dom';

    const alergenos = ["Nueces", "Manzanas", "Chocolate", "Plátano", "Leche" ]

export default function Registro(){
  const {register, handleSubmit} =useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
  console.log(data);
}

    return (

      <div className='alergias'>
        <div className='centrado'>
            <div className='arribaa'>
                    <p>1 de 4</p>

            </div>
      <h1>Ahora selecciona tus alergias e intolerancias</h1>
      <p>Los elementos marcados serán identificados en tu búsqueda como peligrosos para ti.</p>
           
        
            <div className="cuadro">

            </div>
            <form  className='' onSubmit={handleSubmit(onSubmit)}>
            {
            alergenos.map((alergeno) => { return(
                <label class="content-input">
                    <input type="checkbox" name="Vehiculo" id="autopista" value="autopista"/>
                    <i>{alergeno}</i>
                </label>
        )})}

            <button className='liink' onClick={()=> navigate ("/Emergencias")}type="submit">Guardar Perfil</button>
        </form>
        </div>
        </div>
       
    )
}

