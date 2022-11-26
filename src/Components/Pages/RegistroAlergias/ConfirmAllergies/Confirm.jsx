import "../ConfirmAllergies/Confirm.scss";
import React from 'react'

export default function Confirm(){
    // console.log(alergiasSeleccionadas)
    let alergiasSelect = sessionStorage.getItem("alergiasSelect")
    let alergiasConfirm = alergiasSelect.split(",");

    function agregar(){
        // window.location.href = "/RegistroAlergias";
        console.log("clickeado");
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

            {alergiasConfirm.map((item)=>{
                return(
                    <label className="content-input">
                    <input type="checkbox" value={`${item}`} defaultChecked={true} onChange={handleChange}/>
                    <i>{item}</i>
                    </label>
                )
            })}
            <div className="content-input">
                <a href="/RegistroAlergias">
                <button className="btn-add"> Añadir nuevos</button>
                </a>
            </div>

            </div>
        </div>
        )
}