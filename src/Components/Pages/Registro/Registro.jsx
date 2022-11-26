import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "./Registro.scss"
import camara from '../../../Assets/camara.png'
import subirfoto from '../../../Assets/subirfoto.png'
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { API } from "../../Componentes/Shared/services/api";
import axios from 'axios';

export default function Registro(){
  const {register, handleSubmit} =useForm();

  const onSubmit = formData => {
       API.post('register', formData).then(res => {
           console.log('Register user',);
       })
   }

  
    return (

       <>     
       <div className='arribaas'>
       <div className='top-top-2'>
       <Link to="/login">
            <VolverGlobal/>
       </Link>
       <p>1 de 4</p>
       </div>
       <div className='top-top-3'>
       <div className='title-1'>
       <h1>Dinos quien eres</h1>
       </div>
       </div>
       </div>

   
      
        <form  className='form-registro' onSubmit={handleSubmit(onSubmit)}>
        <div className='footo'>
        <div className='footo2'>
      <img  className='imaaa' src={camara}/>

        <input type='file'
       id="userImage" name="file" placeholder='Subir Foto'
       
       {...register("userImage", { required: true ,        
       })}/>
       </div>
       </div>

            <input id="userName" placeholder='Name'
                   {...register("userName", { required: true })}/>

        
            <input id="userMail" placeholder='Email'
                   {...register("userMail", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>

            <input id="userPhone" placeholder='Movil'
                   {...register("userPhone", { required: true ,
                   })}/>         

            <input name="password" id="password" type="password" placeholder='Password' defaultValue="ABCedf123"
                   {...register("password", {
                       required: true,
                       pattern: /[A-Za-z\d$@$!%*?&]{8,15}/
                   })}/>

              <BtnGlobal2 type="submit" name="Guardar Perfil" class="rgb(196 196 196)"/>
            
        </form>
        </>
       
    )
}

