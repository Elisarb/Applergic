import React, {useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import "./Registro.scss"
import camara from '../../../Assets/camara.png'
import { Link } from 'react-router-dom';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { API } from "../../Componentes/Shared/services/api";
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';




  export default function Registro(){
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


    const {register, handleSubmit} =useForm();

    const onSubmit = formData => {
         API.post('register', formData).then(res => {
             console.log('Register user',);
             setTimeout(function(){ 
                window.location.href = "/Emergencias";
              },1);
         })

     }
  
    return (

<>     
    <div className='top-register'>
        
        <Link to="/login"> <VolverGlobal/></Link>

        <div className='top-register-p'>
            <p>1 {t('de')} 4</p>
        </div>
    <div className='top-top-3'>
        <div className='title-1'>
             <h1>{t('quieneres')}</h1>
        </div>
     </div>
 </div>
     
  <form  className='form-registro' onSubmit={handleSubmit(onSubmit)} onChange={handleChangeInput}>
            <div className='div-top-form'>
                <div className='div-cam-input'>
                        <img  className='ima-cam' src={camara}/>

                        <input  multiple id="userImage" name="file" placeholder='Subir Foto'
                        {...register("userImage", { required: true ,  })}/>

                </div>
            </div>
                    <input id="userName" placeholder={t('name')}
                        {...register("userName", { required: true })}/>

                
                    <input id="userMail" placeholder={t('email')}
                        {...register("userMail", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>

                    <input id="userPhone" placeholder={t('movil')}
                        {...register("userPhone", { required: true ,})}/>      
                

                    <input name="password" id="password-id" type="password" placeholder={t('password')} defaultValue="ABCedf123"
                        {...register("password", {
                            required: true,
                            pattern: /[A-Za-z\d$@$!%*?&]{8,15}/ })}/>

<button className='boton-login' disabled={!botonActivo}>Guardar Perfil</button>
    </form>
 </>
       
    )
}

