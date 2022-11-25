import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import "./Login.scss"
import comidas from '../../../Assets/Comidass.png'
import { useNavigate } from 'react-router-dom';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { FffContext } from "../../Context/UseContextComponent";

export default function Login(){
  const {register, handleSubmit} =useForm();
  const {user, setUser}= useContext(FffContext);
  console.log(user);

  const onSubmit = (data)=>{
    
    setUser({...data});
   }

  const navigate = useNavigate()

    return (

       <>
      <div className='arribaa'> 

     <img  className='imatop' src={comidas}/>

      <h1>Bienvenido de nuevo</h1>
      <p>Por favor, dinos tus datos para continuar</p>

      </div>
      
        <form  className='form-login' onSubmit={handleSubmit(onSubmit)}>
        
            <input id="email" placeholder='Email'
                   {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>


            <input name="password" id="password" type="password" placeholder='Password'
                   {...register("password", {
                       required: true,
                       pattern: /[A-Za-z\d$@$!%*?&]{8,15}/
                   })}/>
              <p  className='form-login-a'>¿Olvidaste tu contraseña?</p>
            
              <BtnGlobal2 type="submit" name="Entrar" class="rgb(196 196 196)"/>
        </form>
       
       <div className='text-bottom'>
        <p>¿Nuevo en Applergic?</p>
        <button className='text-bottom-button' onClick={()=> navigate ("/Registro")}>Crea tu cuenta aqui</button>
        
        <a>Me registrare en otro momento</a>
        </div>
       </>
       
    )
}

