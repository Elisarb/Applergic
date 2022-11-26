import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../Carousel/Carrusel.scss'
import car1 from "../../../../Assets/Carrusel-1.png";
import car2 from "../../../../Assets/Carrusel-2.png";
import car3 from "../../../../Assets/Carrusel-3.png";
import car4 from "../../../../Assets/Carrusel-4.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // console.log(activeIndex)
  };

  function algo(){
    let cosita = document.getElementById("lastSlide");
    if (cosita != null){
      if(cosita.classList.contains("active") === true ){
          let botoncito = document.querySelector(".btnFinBienvenida")
          botoncito.classList.add("btnFinBienvenidaActive");
      }
    }
  }

  return (
    <div>

    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <div className="img-container">
        <img
          className="d-block w-100 img-slides"
          src={car1}
          alt="First slide"
        />
        </div>

        <Carousel.Caption>
          <h3> ¡Bienvenido a Applergic!</h3>
          <h4>Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti.</h4>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="img-container">
        <img
          className="d-block w-100 img-slides"
          src={car2}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Lleva tu diario de compras y actividades</h3>
        </Carousel.Caption>
        
    
      </Carousel.Item>
      <Carousel.Item id="lastSlide">
      <div className="img-container">
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h3>En caso de emergencia, nos pondremos en contacto con la persona que nos digas</h3>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="img-container">
        <img
          className="d-block w-100"
          src={car4}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Viaja a donde quieras. Tendrás a tu disposición un traductor off-line y tu informe de alergia e intolerancias traducido al idioma local.</h3>

        </Carousel.Caption>
        

      </Carousel.Item>
      {algo()}
     
    </Carousel>
      <div className="btnsSiguiente">
          <a href="/login ">Saltar</a>
          <a className="btnFinBienvenida" href="/login">Siguiente</a>
      </div>
    </div>
    
  );
}

export default ControlledCarousel;