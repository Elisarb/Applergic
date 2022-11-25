
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Bienvenida from './Components/Pages/Bienvenida/Bienvenida';
import Portada from './Components/Pages/Portada/Portada';
import Registro from './Components/Pages/Registro/Registro';
import RegistroAlergias from './Components/Pages/RegistroAlergias/RegistroAlergias';

import RegistroSos from './Components/Pages/RegistroSos/RegistroSos';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Fav from './Components/Pages/Favoritos/Favoritos';

import Diario from './Components/Pages/DiarioGlobal/DiarioGlobal';
import RegistroTerminado from './Components/Pages/RegistroTerminado/RegistroTerminado';

import Buscar from './Components/Pages/Buscar/Buscar';
import React from 'react';

import DiarioGlobal from './Components/Pages/DiarioGlobal/DiarioGlobal';
import DiarioLocal from './Components/Pages/DiarioLocal/DiarioLocal';
import Escaneo from './Components/Pages/Escaneo/Escaneo';



function App() {
  
  return (
    <Router>
        <Routes>  
           
        

          <Route path="/" element={<Bienvenida></Bienvenida>} />
          <Route path="/Portada" element={<Portada></Portada>} />


          <Route path="/Bienvenida" element={<Bienvenida></Bienvenida>} />
          <Route path="/" element={<Portada></Portada>} />
          <Route path="/Login" element={<Login></Login>} />

          <Route path="/Registro" element={<Registro></Registro>} />
          <Route path="/Emergencias" element={<RegistroSos></RegistroSos>} />
          <Route path="/RegistroAlergias" element={<RegistroAlergias></RegistroAlergias>} />
          <Route path="/Home" element={<Home></Home>} />
          <Route path="/Favoritos" element={<Fav></Fav>} />
          <Route path="/Escaneo" element={<Escaneo></Escaneo>} />
          <Route path="/DiarioLocal" element={<DiarioLocal></DiarioLocal>} />
          <Route path="/DiarioGlobal" element={<DiarioGlobal></DiarioGlobal>} />
          <Route path="/Terminado" element={<RegistroTerminado></RegistroTerminado>} />
          <Route path="/Buscar" element={<Buscar></Buscar>} />
         
        </Routes>
    </Router>


    )
}

export default App;
