import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { BtnGlobal } from '../BtnGlobal/BtnGlobal';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import "./RegistroSos.scss"


export default function RegistroSos(){
  const {register, handleSubmit} =useForm();
  const navigate = useNavigate()

 
  const onSubmit = (data) => {
  console.log(data);
}

    return (

      <>     
      <div className='arribaas'>
      <Link to="/Registro">
           <VolverGlobal/>
      </Link>
      <p>2 de 4</p>
      <div className='title-1'>
      <h1>Vamos a añadir tu contacto en caso de emergencia</h1>
      </div>
      <div className='title-2'>
      <p>Nos pondremos en contacto con tu persona de confianza y/o 
       compañia de seguros en caso de emergencias.
      </p>
      </div>
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

       <BtnGlobal type="submit" name="Guardar Emergencias" class={onSubmit ? "rgb(196 196 196)" : 'rgb(248 73 113)'}/>
        </form>
        <div className='qq'> 
        <a> Registrare mi usuario en otro momento</a>
        </div>
        </>
       
    )
}

