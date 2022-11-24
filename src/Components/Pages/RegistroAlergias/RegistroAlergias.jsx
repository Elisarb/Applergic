import React from 'react'
import { useForm } from "react-hook-form";
import "./RegistroAlergias.scss"
import { useNavigate } from 'react-router-dom';


export default function RegistroAlergias(){
  const {register, handleSubmit} =useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
  console.log(data);
}

const alergenos = ["Nueces", "Manzanas", "Chocolate", "Plátano", "Leche", "Cambur", "Penne"]
let alergenosOrdenados= [];
const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let ingredientes = [];

function OrderAlergenos(){
    alergenosOrdenados = alergenos.sort();
}


function FiltrarAlfabeticamente(array,alfabeto){
    alfabeto.forEach(letra => {
        let nuevo = array.filter(aler => aler[0] === letra)
        if (nuevo.length > 0){
            ingredientes.push(nuevo)
        }else{
            
        }   
        });
};

    OrderAlergenos()
    console.log(alergenosOrdenados)
    FiltrarAlfabeticamente(alergenosOrdenados,alfabeto)
    console.log(ingredientes)

    return (

      <div className='alergias'>
        <div className='centrado'>
            <div className='arribaa'>
                    <p>1 de 4</p>

            </div>
      <h1>Ahora selecciona tus alergias e intolerancias</h1>
      <p>Los elementos marcados serán identificados en tu búsqueda como peligrosos para ti.</p>
           
        
            <div className="cuadro">

            </div>
            <form  className='' onSubmit={handleSubmit(onSubmit)}>
                
            {
            ingredientes.map((letra) => { return(
                <div>
                    <h1>{letra[0][0]}</h1>
                    
                        {letra.map((alergeno)=>{
                            return(
                                <label class="content-input">
                                <input type="checkbox" name="Vehiculo" id="autopista" value="autopista"/>
                                <i>{alergeno}</i>
                                </label>
                            )
                        })}
                        
                </div>
        )})}

            <button className='liink' onClick={()=> navigate ("/Emergencias")}type="submit">Guardar Perfil</button>
        </form>
        </div>
        </div>
       
    )
}

