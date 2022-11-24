import React from 'react'
import { useForm } from "react-hook-form";
import "./Login.scss"
import comidas from '../../../Assets/Comidass.png'
import { useNavigate } from 'react-router-dom';


export default function Login(){
  const {register, handleSubmit} =useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
  console.log(data);
}

    return (

       <>
      <div className='arribaa'> 

     <img  className='imatop' src={comidas}/>

      <h1>Bienvenido de nuevo</h1>
      <p>Por favor, dinos tus datos para continuar</p>

      </div>
      
        <form  className='fooorm' onSubmit={handleSubmit(onSubmit)}>
        
            <input id="email" placeholder='Email'
                   {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>


            <input name="password" id="password" type="password" placeholder='Password'
                   {...register("password", {
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                   })}/>
              <a>¿Olvidaste tu contraseña?</a>
            <button type="submit">Entrar</button>
           
        </form>
       
       <div className='abaajo'>
        <p>¿Nuevo en Applergic?</p>
        <button className='liink' onClick={()=> navigate ("/Registro")}>Crea tu cuenta aqui</button>
        </div>
       </>
       
    )
}

