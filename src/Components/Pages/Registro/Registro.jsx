import React, {useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import "./Registro.scss"
import camara from '../../../Assets/camara.png'
import { Link } from 'react-router-dom';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { API } from "../../Componentes/Shared/services/api";
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';
import { JwtContext } from '../../Componentes/Shared/contexts/JwtContext';
import ImagePicker from 'simple-react-image-picker'





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
    const { setJwt } = useContext(JwtContext);


    const {register, handleSubmit,formState: { errors }} =useForm();

    const onSubmit = formData => {
         API.post('register', formData).then(res => {
             console.log(res);
             setTimeout(function(){ 
                window.location.href = "/Emergencias";
              },1000);
         })
         API.post('login', formData).then(res => {
       
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.userInfo._id))
            
            setJwt(res.data.token);
            
            console.log(res.data.userInfo);
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
 <div>

        
      </div>
  <form  className='form-registro' onSubmit={handleSubmit(onSubmit)} onChange={handleChangeInput}>
            <div className='div-top-form'>

                <div className='div-cam-input'>
                        <img  className='ima-cam' src={camara}/>

                        <input  id="userImage" name="file" placeholder='Subir Foto'
                        {...register("userImage", { required: true })}/>

                </div>
            </div>
    
                <input class="input" id="userName" placeholder={t('name')}
                  {...register("userName",{required: true,})}/>
                  {errors.userName?.type === 'required' && "Añade un Nombre"}
                
                    <input id="userMail" placeholder={t('email')}
                        {...register("userMail", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
                             {errors.userMail?.type === 'required' && "El email es requerido"}
                            {errors.userMail?.type === 'pattern' && "Introduce un email valido: xxx@xxx.xx"} 

                    <input id="userPhone" placeholder={t('movil')}
                        {...register("userPhone", { required: true ,})}/>      
                

                    <input name="password" id="password-id" type="password" placeholder={t('password')} defaultValue="ABCedf123"
                        {...register("password", {
                            required: true,
                            pattern: /[A-Za-z\d$@$!%*?&]{8,15}/ })}/>
                            {errors.password?.type === 'required' && "La Contraseña es requerida"}
                            {errors.password?.type === 'pattern' && "Introduce una contraseña valida: La contraseña debe tener minimo 8 y maximo 15 caracteres ,al menos una letra mayúscula y una letra minucula, al menos un dígito, no espacios en blanco y menos 1 caracter especial"}

<button className='boton-login' disabled={!botonActivo}>Guardar Perfil</button>
    </form>
 </>
       
    )
}

