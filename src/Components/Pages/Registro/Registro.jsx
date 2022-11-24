import React from 'react'
import { useForm } from "react-hook-form";
import "./Registro.scss"
import camara from '../../../Assets/camara.png'
import subirfoto from '../../../Assets/subirfoto.png'
// import { useNavigate } from 'react-router-dom';
import { BtnGlobal } from '../BtnGlobal/BtnGlobal';

export default function Registro(){
  const {register, handleSubmit} =useForm();
//   const navigate = useNavigate()
  const onSubmit = (data) => {
  console.log(data);
}

    return (

      <div className='toodo'>
      <div className='arribaa'>
       
      <p>1 de 4</p>
      <h1>Dinos quien eres</h1>
      <div className='footo'>

      <div className='footo2'>
      <img  className='imaaa' src={camara}/>
      <img  className='imaaaa' src={subirfoto}/>
      </div>
      </div>
      </div>
      
        <form  className='foorm' onSubmit={handleSubmit(onSubmit)}>

            <input id="name" placeholder='Name'
                   {...register("name", { required: true })}/>

        
            <input id="email" placeholder='Email'
                   {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

            <input id="movil" placeholder='Movil'
                   {...register("movil", { required: true ,
                   pattern: /^(\+34|0034|34)?[67]\d{8}$/
                   })}/>    

            <input name="password" id="password" type="password" placeholder='Password' defaultValue="ABCedf123"
                   {...register("password", {
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                   })}/>

              <BtnGlobal type="submit" name="Guardar Perfil" class={handleSubmit ? "rgb(196 196 196)" : 'rgb(248 73 113)'}/>
            
        </form>
        </div>
       
    )
}

