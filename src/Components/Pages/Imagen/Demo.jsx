import React, { useState } from "react";
import "./Demo.scss"
import subirfoto from '../../../Assets/subirfoto.png'
import camara from '../../../Assets/camara.png'


export default function Demo() {
  const [images, setimages] = useState([]);
  const [hidden, setHidden] = useState([]);
  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;

    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setimages(newImgsState);

    console.log(newImgsState);
  };
  

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;

    //el array con las imagenes nuevas
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      //console.log(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      });

      indexInicial++;
    });

    //despues de haber concluido el ciclo retornamos las nuevas imagenes
    return arrayImages;
  }

  function deleteImg(indice) {
    //console.log("borrar img " + indice);

    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setimages(newImgs);
  }

  return (
      <div className='div-top-form'>
      <label className='div-cam-input'>

      
                <img className="camara-form" src={camara}></img>
                 <img className="subirfoto" src={subirfoto}></img>
                 <input hidden type="file" multiple onChange={changeInput}></input>
                </label>
            
      


      
        {images.map((imagen) => (
          <div key={imagen.index} className="mostrar">
            
              <img src={imagen.url}/>
              <button className="delete" onClick={deleteImg.bind(this, imagen.index)} > X </button>
            
            </div>
            
         
        ))}
         </div>
    
    
  );
}
