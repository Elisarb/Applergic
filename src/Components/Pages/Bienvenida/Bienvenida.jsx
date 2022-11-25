import React from 'react';
import '../Bienvenida/Bienvenida.scss';
import logo from '../../../Assets/Logo.png' ;
import { render } from "react-dom";
import ControlledCarousel from "./Carousel/Carrusel.jsx"


const Bienvenida = () => {


  return (
    <div className="pag-bienvenida">
        <div className="header">
            <img src={logo} alt="logo Applergic" className="logo"/>
        </div>
        <div className="carrusel">
        <ControlledCarousel></ControlledCarousel>
        </div>

    </div>
  )
}

export default Bienvenida