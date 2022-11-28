
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import { API } from "../../Componentes/Shared/services/api";
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';

import "./RegistroSos.scss"


export default function RegistroSos(){
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
  const {register, handleSubmit,formState: { errors }} =useForm();
 
  const onSubmit = formData => {
    API.post('sos', formData).then(res => {
        console.log(res);
        setTimeout(function(){ 
           window.location.href = "/RegistroAlergias";
         },500);
    

    }
   )
  }
  

    return (

  <>     
      <div className='top-sos'>         
              <Link to="/Registro">
                    <VolverGlobal/>
              </Link>

          <div className='top-top-2'>
              <p>2 de 4</p>   
          </div>

          <div className='top-top-3'>
              <div className='title-1'>
                  <h1>Vamos a añadir tu contacto en caso de emergencia</h1>
              </div>

              <div className='title-2'>
                  <p>Nos pondremos en contacto con tu persona de confianza y/o 
                  compañia de seguros en caso de emergencias.</p>
              </div>
          </div>

      </div>
      
    <form  className='form-sos' onSubmit={handleSubmit(onSubmit)} onChange={handleChangeInput}>
            <input id="contactName" placeholder='Nombre completo de tu contacto'
                   {...register("contactName", { required: true , message: "You must specify your first name before moving forward"})}/>
                              {errors.contactName?.type === 'required' && "El email es requerido"}
                            
            <input id="contactMail" placeholder='Direccion  e.mail'
                   {...register("contactMail", { required: true, })}/>
                   {errors.contactMail?.type === 'required' && "El email es requerido"}
                   {errors.contactMail?.type === 'pattern' && "Introduce un email valido: xxx@xxx.xx"} 
              
              <input id="contacPhone" placeholder='Movil'
                   {...register("contacPhone", { required: true })}/>    
                   {errors.contacPhone?.type === 'required' && "El Movil es requerido"}
                   {errors.contacPhone?.type === 'pattern' && "Introduce un numero telefonico valido"}
                 
      <input name="secureName" placeholder='Compañia de Seguros'
                   {...register("secureName", { required: true,})}/>
                   {errors.secureName?.type === 'required' && "La Compañia es requerida"}
                   {errors.secureName?.type === 'pattern' && "Introduce una Compañia de seguros valida"}

        <input name="insuranceNumber" id="poliza"  placeholder='Nº Poliza'
                   {...register("insuranceNumber", { required: true,})}/>
                    {errors.insuranceNumber?.type === 'required' && "El Nº Poliza es requerida"}
                   {errors.insuranceNumber?.type === 'pattern' && "Introduce un numero valido"}


<button className='boton-login' disabled={!botonActivo}>Guardar Emergencia</button>
    </form>
        <div className='qq'> 
        <Link to="/RegistroAlergias">
        <p> Añadir en otro momento</p>
              </Link>
            
        </div>
  </>
       
    )
}

