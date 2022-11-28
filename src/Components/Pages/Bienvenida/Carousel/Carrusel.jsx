import React, { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../Carousel/Carrusel.scss'
import car1 from "../../../../Assets/Carrusel-1.png";
import car2 from "../../../../Assets/Carrusel-2.png";
import car3 from "../../../../Assets/Carrusel-3.png";
import car4 from "../../../../Assets/Carrusel-4.png";
import { MyContext } from '../../../Componentes/Shared/contexts/MyContext';
import { Link } from 'react-router-dom';

function ControlledCarousel() {
  const {t} = useContext(MyContext)

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
          <h3>{t('bienvenido')}</h3>
          <h4>{t('escaneacarrusel')}</h4>
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
          <h3>{t('diariocarrusel')}</h3>
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
          <h3>{t('soscarrusel')}</h3>
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
          <h3>{t('banderascarrusel')}</h3>

        </Carousel.Caption>
        

      </Carousel.Item>
      {algo()}
     
    </Carousel>
      <div className="btnsSiguiente">
          <Link className="btnFinBienvenida1" to="/registro">{t('saltar')}</Link>
          {/* <a href=" ">{t('saltar')}</a> */}
          <Link className="btnFinBienvenida" to="/registro">{t('siguiente')}</Link>
          {/* <a className="btnFinBienvenida" href="/login">{t('siguiente')}</a> */}
      </div>
    </div>
    
  );
}

export default ControlledCarousel;