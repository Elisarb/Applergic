import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ApplergicContext } from '../../../Context/context';
import BtnDiary from '../../Componentes/Shared/Btn-Diary/Btn-Diary';
import BtnFav from '../../Componentes/Shared/Btn-Fav/Btn-Fav';
import BtnShare from '../../Componentes/Shared/Btn-Share/Btn-Share';
import { BtnGlobal2 } from '../../Componentes/Shared/BtnGlobal2/BtnGlobal2';
import { JwtContext } from '../../Componentes/Shared/contexts/JwtContext';
import { MyContext } from '../../Componentes/Shared/contexts/MyContext';
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import './MyBarcode.scss'

const MyBarcode = () => {
    const { usuario } = useContext(ApplergicContext);
    console.log(usuario.allergens)
    const {t} = useContext(MyContext)
    
    let myproducts=[]
    const {products, camera, setCamera} = useContext(JwtContext);
    // const [myproduct, setMyproduct]=useState({})
    const {idBarcode} = useParams(0);
    myproducts.map((myproduct)=>{usuario.allergens.map((allergen)=>{
        const productAllergic = myproduct.filter(ingredients=>ingredients.toLowerCase().includes(allergen.toLowerCase()))
    console.log(productAllergic)
    }) 
    

})
    ;
    products.forEach(element => {
        if (element.barCode.toString()===idBarcode){
            myproducts.push(element);
        }{}
        
    });

  return (
        
          myproducts.map((myproduct,index)=>{return(
          <> 
        <div className='c-valorationPage__volver' key={index}>
            <Link  to={`/Escaneo`}><VolverGlobal onClick={() => setCamera(!camera)}/></Link>
        </div>
            <div key={index} className="c-infoBoxProduct">
                <h1>Aquí tienes el resultado</h1>
                <p>Este producto es apto para tí</p>
                <div className="c-infoBoxProduct__images">
                    <div className="c-infoBoxProduct__images__contenedor__img">
                        <img src={myproduct.productImage} alt={myproduct.productName} className="c-infoBoxProduct__images__img"/>
                    </div>
                    <div className="c-infoBoxProduct__images__icons">
                        <BtnFav></BtnFav>
                        <BtnDiary></BtnDiary>
                        <BtnShare></BtnShare>
                    </div>
                </div>
                <h2>{myproduct.productName}</h2>
                <p>{myproduct.ingredients}</p>
                <BtnGlobal2 type="submit" name={t('escanearTexto2')} color="white" class="#26c7dc" border="none" />
            </div>
            </>
            
            )

          })  
          
       )
      
}

export default MyBarcode
