import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "./RegistroSos.scss"


export default function RegistroSos(){
  const {register, handleSubmit} =useForm();
  const [orden, setOrden] = useState(false);

  const onSubmit = (data) => {
  console.log(data);
}

    return (

      <div className='toodo'>
      <div className='arribaas'>
      <p>2 de 4</p>
      <h1>Vamos a añadir tu contacto en caso de emergencia</h1>
      <p>Nos pondremos en contacto con tu persona de confianza y/o 
       compañia de seguros en caso de emergencias.
      </p>
      </div>
      
        <form  className='foorm' onSubmit={handleSubmit(onSubmit)}>

            <input id="name" placeholder='Nombre completo de tu contacto'
                   {...register("name", { required: true })}/>


        
            <input id="email" placeholder='Direccion  e.mail'
                   {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

              <input id="movil" placeholder='Movil'
                   {...register("movil", { required: true ,
                   pattern: /^(\+34|0034|34)?[67]\d{8}$/
                   })}/>    
   

            <input name="poliza" id="poliza"  placeholder='Compañia de Seguros/Nº Poliza'
                   {...register("poliza", {
                       required: true,
                     //   pattern: /^(\+34|0034|34)?[67]\d{8}$/
                   })}/>

            <button type="submit">Guardar Perfil</button>
        </form>
        <div className='qq'> 
        <a> Registrare mi usuario en otro momento</a>
        </div>
        </div>
       
    )
}

