import "../ConfirmAllergies/Confirm.scss";
import React from 'react'
import { BtnGlobal2 } from "../../../Componentes/Shared/BtnGlobal2/BtnGlobal2";
import { useForm } from "react-hook-form";
import { API } from "../../../../Components/Componentes/Shared/services/api";

export default function Confirm(){
    // console.log(alergiasSeleccionadas)
    let alergiasSelect = sessionStorage.getItem("alergiasSelect")
    let alergiasConfirm = alergiasSelect.split(",");

    const {register,handleSubmit} = useForm();

    function agregar(){
        // window.location.href = "/RegistroAlergias";
        console.log("clickeado");
    }

    const onSubmit = formData =>{
        API.post('register', formData).then(res => {
            console.log('Registered')
            })
    }

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked === false) {
            let index = alergiasConfirm.indexOf(value);
            alergiasConfirm.splice(index,1);
        }
        else if (checked === true){
            alergiasConfirm.push(value)
        }
        console.log(alergiasConfirm);
        };

    

    return(
        <div className="confirm-page">
            <div  className="centrado">
            <h1>Confirma tu selección</h1>
            <p>A continuación, te resumimos los alimentos registrados como peligrosos para ti</p>
            <div>
            <p className="p-marcar">Marca para deseleccionar o añadir uno nuevo</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            {alergiasConfirm.map((item)=>{
                return(
                    <label className="content-input">
                    <input type="checkbox" value={`${item}`} defaultChecked={true} onChange={handleChange}
                    {...register ("allergens", {required: false })}/>
                    <i>{item}</i>
                    </label>
                )
            })}

            <div className="btn-add">
                <a href="/RegistroAlergias" className="btn-container">
                 Añadir nuevos
                </a>
            </div>
            <BtnGlobal2 type="submit" name="Confirmar alergias" class="rgb(196 196 196)"/>
            </form>
            </div>
        </div>
        )
}