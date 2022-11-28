
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { JwtContext } from "../../Componentes/Shared/contexts/JwtContext";
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
  const {register, handleSubmit} =useForm();

  const { setJwt } = useContext(JwtContext);
 
  const onSubmit = (data) => {
  console.log(data);

  setJwt(data.token);

  setTimeout(function(){ 
    window.location.href = "/RegistroAlergias";

  },1);
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

            <input id="contactMail" placeholder='Direccion  e.mail'
                   {...register("contactMail", { required: true, })}/>

              <input id="contacPhone" placeholder='Movil'
                   {...register("contacPhone", { required: true })}/>    

                 

   

            <input name="secureName" id="poliza"  placeholder='Compañia de Seguros/Nº Poliza'
                   {...register("secureName", { required: true,})}/>

<button className='boton-login' disabled={!botonActivo}>Guardar Emergencia</button>
    </form>
        <div className='qq'> 
        <Link to="/RegistroAlergias">
        <a> Registrare mi usuario en otro momento</a>
              </Link>
            
        </div>
  </>
       
    )
}

