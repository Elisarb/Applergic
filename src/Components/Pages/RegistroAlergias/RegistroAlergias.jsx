import React from 'react';
import "./RegistroAlergias.scss";
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { useForm } from "react-hook-form";


export default function RegistroAlergias(){
    const alergenos = ["Nueces", "Manzanas", "Chocolate", "Plátano", "Leche", "Cambur", "Pasta", "Gluten"]
    let alergenosOrdenados= [];
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let ingredientes = [];
    let alergiasSeleccionadas = []

    const {handleSubmit} = useForm();
    const handleChange = (e) => {
    const { value, checked } = e.target;


    if (checked === true) {
        alergiasSeleccionadas.push(value);
    }

    else {
        let index = alergiasSeleccionadas.indexOf(value);
        alergiasSeleccionadas.splice(index,1);
    }

    // console.log(alergiasSeleccionadas);

    };

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

const onSubmit = () => {
    console.log(alergiasSeleccionadas);
}



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
            {
            ingredientes.map((letra) => { return(
                <div className="bolitas">
                    <a href={`#${letra[0][0]}`} >

                    <p>{letra[0][0]}</p>

                    </a>
                </div>
            )})}




            </div>
            <form  className=''  onSubmit={handleSubmit(onSubmit)}>
                
            {
            ingredientes.map((letra) => { return(
                <div className="cuadroPorLetra">
                    <h1 id={letra[0][0]}>{letra[0][0]}</h1>
                    
                        {letra.map((alergeno, index)=>{
                            return(
                                <label className="content-input">
                                <input type="checkbox" value={`${alergeno}`} onChange={handleChange} />
                                <i>{alergeno}</i>
                                </label>
                            )
                        })}
  
                </div>
                
                
        )})}
        <div className="btn-container">
            <BtnGlobal2 type="submit" name="Guardar" class="rgb(38,199,220)"/>
        </div>
        </form>
        </div>
        </div>
       
    )
}