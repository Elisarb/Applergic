import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import "./Login.scss"
import comidas from '../../../Assets/Comidass.png'
import { Link, useNavigate } from 'react-router-dom';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { JwtContext } from '../../Componentes/Shared/contexts/JwtContext';
import { API } from "../../Componentes/Shared/services/api";
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';

export default function Login(){
  const {t} = useContext(MyContext)
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);


  const navigate = useNavigate()

  const onSubmit = formData => {

    API.post('login', formData).then(res => {
       
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.userInfo.userMail))
        setJwt(res.data.token);
        setTimeout(function(){ 
          window.location.href = "/Home";
        },1);
        console.log(res.data.userInfo);
    })
}

    return (

       <>
      <div className='arribaa'> 

     <img  className='imatop' src={comidas}/>

      <h1>{t('bienvenidologin')}</h1>
      <p>{t('subtextloging')}</p>

      </div>
      
        <form  className='form-login' onSubmit={handleSubmit(onSubmit)}>
        
        <input id="userMail" placeholder='Email'  defaultValue="matt12@gmail.com"
                   {...register("userMail", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>

      <input name="password" id="password" type="password" placeholder='Password' defaultValue="ABC123abc/"
                   {...register("password", {
                       required: true,
                       pattern: /[A-Za-z\d$@$!%*?&]{8,15}/
                   })}/>
              <p  className='form-login-a'>{t('olvido')}</p>
            
              <BtnGlobal2 type="submit" name={t('entrar')} class="rgb(196 196 196)"/>


        </form>
       
       <div className='text-bottom'>
        <p>{t('nuevo')}</p>
        <button className='text-bottom-button' onClick={()=> navigate ("/Registro")}>{t('crearcuenta')}</button>
        
        <button className='text-bottom-button' onClick={()=> navigate ("/Bienvenida")}>{t('otromomento')}</button>

        {/* <a href='/Bienvenida' className='form-login-a'>{t('otromomento')}</a> */}
        </div>
       </>
       
    )
}

