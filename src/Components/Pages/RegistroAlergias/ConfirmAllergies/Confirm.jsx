import "../ConfirmAllergies/Confirm.scss";
import { useEffect } from 'react'
import React, { useContext } from 'react'
import { ApplergicContext } from "../../../../Context/context";
import { BtnGlobal2 } from "../../../Componentes/Shared/BtnGlobal2/BtnGlobal2";
import { useForm } from "react-hook-form";
import { API } from "../../../../Components/Componentes/Shared/services/api";
import { MyContext } from "../../../../Components/Componentes/Shared/contexts/MyContext";
// import Axios from "Axios";

export default function Confirm(){
    const { usuario } = useContext(ApplergicContext);
    const info = usuario._id;
    // console.log(alergiasSeleccionadas)
    let alergiasSelect = sessionStorage.getItem("alergiasSelect")
    let alergiasConfirm = alergiasSelect.split(",");
    console.log(alergiasConfirm)
    const {register,handleSubmit} = useForm();
    const {t} = useContext(MyContext);
    const { alergenos } = useContext(ApplergicContext);
    let idAlergias = [];

    // function agregar(){
    //     // window.location.href = "/RegistroAlergias";
    //     console.log("clickeado");
    // }


    // const onSubmit = () =>{
    //     API.put(`${info}`, alergiasConfirm).then(res => {
    //         console.log('Registered')
    //         })
    // }

    const onSubmit = () =>{
        try{
            updatePost()
            }
            catch(error){
                console.log(`errorcito`)
            }
        window.location.href = "/terminado";
    }
    
    function updatePost() {
        obtenerIdAlergias()
        // API.put(`https://back-end-proyecto.vercel.app/users/${info}`, {
            API.put(`http://localhost:5000/users/${info}`, {
            allergens: idAlergias,

          })
          .then((response) => {
            console.log("registrado ahora si");
            console.log(response);
            // console.log(`${idAlergias}`)
          });
      }

      function obtenerIdAlergias(){
        alergiasConfirm.forEach(alerUsu => {
            alergenos.forEach(aler =>{
                if (alerUsu === aler.allergensName){
                    idAlergias.push(aler._id)
                }
                
            })
          
        });
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
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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

            <div>
                <BtnGlobal2 type="submit" name="Confirmar alergias" class="rgb(196 196 196)"/>
            </div>
            </form>
            </div>
        </div>
        )
}