import "./RegistroAlergias.scss";
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ApplergicContext } from "../../../Context/context";
import { useContext } from 'react';


export default function RegistroAlergias(){
    // let alergenos = ["Nueces", "Manzanas", "Chocolate", "Plátano", "Leche", "Cambur", "Pasta", "Gluten"]
    let alergenosOrdenados= [];
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    let ingredientes = [];
    let alergiasSeleccionadas = []
    let allergens = [];
    const { alergenos } = useContext(ApplergicContext);

    alergenos.map((item)=>
    {return(
        allergens.push(item.allergensName)
        
    )})
    console.log(allergens)

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
    alergenosOrdenados = allergens.sort();
}



function FiltrarAlfabeticamente(array,alfabeto){
    alfabeto.forEach(letra => {

        let nuevo = array.filter(aler => aler[0] == letra)
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
                    
                        {letra.map((ingredientes, index)=>{
                            return(
                                <label className="content-input">
                                <input type="checkbox" value={`${ingredientes}`} onChange={handleChange} />
                                <i>{ingredientes}</i>
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