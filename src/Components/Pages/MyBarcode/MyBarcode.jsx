import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import componentDidMount from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApplergicContext } from '../../../Context/context';
import BtnDiary from '../../Componentes/Shared/Btn-Diary/Btn-Diary';
import BtnFav from '../../Componentes/Shared/Btn-Fav/Btn-Fav';
import BtnShare from '../../Componentes/Shared/Btn-Share/Btn-Share';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { JwtContext } from '../../Componentes/Shared/contexts/JwtContext';
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
// import myproduct from '../Escaneo/Escaneo'
import './MyBarcode.scss'


let productoEscaneado;


const MyBarcode = () => {

    const [myproduct, setMyproduct]=useState({});
    const [userAllergies, setUserAllergies]=useState({});
    const { usuario } = useContext(ApplergicContext);
    // const { products } = useContext(ApplergicContext);
    // const [myproduct, setMyproduct]=useState({})
    const info = usuario._id;
    const {t} = useContext(MyContext)
    const {idBarcode} = useParams();
    const [printproduct, setprintproduct]=useState({})
    const {products, camera, setCamera} = useContext(JwtContext);
    let peligro='hola';
    
    


    useEffect(()=>{
        producto(products)


        function producto (array) {
            console.log("funciona")
    
                array.map((item)=>{
                if (item.barCode == idBarcode){
                    productoEscaneado = item;
                    // setMyproduct(item)
                    console.log(productoEscaneado)
                    // printProduct.push(item)
                    setprintproduct(item)
                    // // console.log(usuario);
                }
                
                })       
            search();
        }

        function search(){
            if (productoEscaneado !== undefined && info !== undefined){
                // console.log(usuario);
                // console.log(productoEscaneado.ingredients);
                let alergenosUsuario = usuario.allergens;
                console.log(alergenosUsuario)

                alergenosUsuario.map((item) => {
                    let ingredientesMin = productoEscaneado.ingredients.toLowerCase().toString();
                    // if(productoEscaneado.ingredients.toLowerCase().contains(item.allergensName)){
                    //     console.log("peligro")
                    // }
                    console.log(`las alergias del user son: ${item.allergensName}`)
                    
                    if(ingredientesMin.includes(item.allergensName)){
                        console.log("peligro")
                        peligro = true;
                    }else{
                        console.log("no hay peligro")
                        peligro = false;
                    }
                })
            }
        }


    },[usuario, products]);
    
    
    // printProduct.push(productoEscaneado) ;
    console.log(printproduct)

    useEffect(()=>{
        
    },[printproduct,camera, setCamera, t]); 

    

    return (
        <>
            <div>
                <div className='c-valorationPage__volver'>
                <Link  to={`/Escaneo`}><VolverGlobal onClick={() => setCamera(!camera)}/></Link>
                </div>
                <div  className="c-infoBoxProduct">
                    <h1>Aquí tienes el resultado</h1>
                
                    <p>Este producto es apto para tí</p>
                    <p>Este producto NO es apto para tí</p>
                    <div className="c-infoBoxProduct__images">
                        <div className="c-infoBoxProduct__images__contenedor__img">
                            <img src={printproduct.productImage} alt={printproduct.productName} className="c-infoBoxProduct__images__img"/>
                        </div>
                        <div className="c-infoBoxProduct__images__icons">
                            <BtnFav></BtnFav>
                            <BtnDiary></BtnDiary>
                            <BtnShare></BtnShare>
                        </div>
                    </div>
                    <h2>{printproduct.productName}</h2>
                    <p>{printproduct.ingredients}</p>
                    <BtnGlobal2 type="submit" name={t('escanearTexto2')} color="white" class="#26c7dc" border="none" />
                </div>
            </div>
        )
        </>
            
        //  
        
    )      

      
  }


export default MyBarcode
