import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import "./Login.scss"
import comidas from '../../../Assets/Comidass.png'
import { Link, useNavigate } from 'react-router-dom';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { JwtContext } from '../../Componentes/Shared/contexts/JwtContext';
import { API } from "../../Componentes/Shared/services/api";
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login(){
const [botonActivo,setBotonActivo]=useState(false);

const [inputSelected, setInputSelected]=useState([]);

const handleChangeInput=e=>{
  var auxiliar=null;
  if(inputSelected.includes(e.target.value)){
    auxiliar=inputSelected.filter(elemento=>elemento!==e.target.value);
  }else{auxiliar=inputSelected.concat(e.target.value);
  }
  setInputSelected(auxiliar);

  if(auxiliar.length>0){
    setBotonActivo(true);
   } else{
    setBotonActivo(false);
   }
  
}


  const {t} = useContext(MyContext)
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);


  const navigate = useNavigate()

  const onSubmit = formData => {

    API.post('login', formData).then(res => {
       
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.userInfo._id))
        
        setJwt(res.data.token);
        console.log(res.data.userInfo);
        window.location.href = "/Home";
    })

    
    }



    return (

 <>
      <div className='top-login'> 
          <img  className='imatop' src={comidas}/>
          <h1>{t('bienvenidologin')}</h1>
          <p>{t('subtextloging')}</p>
      </div>
      
     <form  className='form-login' onSubmit={handleSubmit(onSubmit)} onChange={handleChangeInput}>       
         <input id="userMail" placeholder='Email'  defaultValue=""
           {...register("userMail", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>

         <input name="password" id="password" type="password" placeholder='Password' defaultValue=""
         {...register("password", { required: true, pattern: /[A-Za-z\d$@$!%*?&]{8,15}/ })}/>

        <p  className='form-login-p'>{t('olvido')}</p>
              
              <button className='boton-login' disabled={!botonActivo}>Entrar</button>
              
  </form>
       
       <div className='text-bottom'>
          <p>{t('nuevo')}</p>
          <button className='text-bottom-button' onClick={()=> navigate ("/Registro")}>{t('crearcuenta')}</button>       
          <button className='text-bottom-button' onClick={()=> navigate ("/Bienvenida")}>{t('otromomento')}</button>
        </div>
 </>
       
    )
}

