import React from "react";
import "./Buscar.scss"
import { VolverGlobal } from '../VolverGlobal/VolverGlobal';
import { Link } from "react-router-dom";

export default function Buscar(){


  return (
    <>
    <div className="buscar-top">
    <Link to="/Home">
            <VolverGlobal/>
       </Link>
    </div>
<div className="buscar-top">
  <iframe style={{width:"100%", height:"800px"}} src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Madrid%2C%20Spain+(T%C3%ADtulo)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>
    </div>
    </>
  );

}