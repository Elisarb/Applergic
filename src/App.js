
import './App.css';
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Bienvenida from './Components/Pages/Bienvenida/Bienvenida';
import Portada from './Components/Pages/Portada/Portada';
import Registro from './Components/Pages/Registro/Registro';
import RegistroAlergias from './Components/Pages/RegistroAlergias/RegistroAlergias';

import RegistroSos from './Components/Pages/RegistroSos/RegistroSos';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Fav from './Components/Pages/Favoritos/Favoritos';

import RegistroTerminado from './Components/Pages/RegistroTerminado/RegistroTerminado';

import Buscar from './Components/Pages/Buscar/Buscar';
import React, { useState } from 'react';

import DiarioGlobal from './Components/Pages/DiarioGlobal/DiarioGlobal';
import DiarioLocal from './Components/Pages/DiarioLocal/DiarioLocal';
import Escaneo from './Components/Pages/Escaneo/Escaneo';

import AuthButton from './Components/Componentes/Shared/components/AuthButton/AuthButton';

import {ApplergicContextProvider } from './Context/context';


import { JwtContext } from './Components/Componentes/Shared/contexts/JwtContext'
import RequireAuth from './Components/Componentes/Shared/components/RequireAuth/RequireAuth';
import Valoraciones from './Components/Pages/Valoraciones/Valoraciones';
import Traductor from './Components/Pages/Traductor/Traductor';
import { useTranslation } from 'react-i18next';
import { MyContext } from './Components/Componentes/Shared/contexts/MyContext';


function App() {
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
    i18n.changeLanguage(code)
  }
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  return (

    <JwtContext.Provider value={{ jwt, setJwt }}>
    
    <MyContext.Provider value={{t, changeLanguaje}}> 

    <Router><AuthButton/>
      <ApplergicContextProvider>  
        <Routes>    

          <Route path="/Bienvenida" element={<Bienvenida></Bienvenida>} />
          <Route path="/" element={<Portada></Portada>} />
  
          <Route path="/Login" element={<Login></Login>} />
          <Route                  
               path="/"
               element={<Navigate to="/Home"/>} />
          <Route path="/Registro" element={<Registro></Registro>} />
          <Route path="/Emergencias" element={<RegistroSos></RegistroSos>} />
          <Route path="/RegistroAlergias" element={<RegistroAlergias></RegistroAlergias>} />
          <Route path="/Home" element={<RequireAuth><Home></Home></RequireAuth>} />
          <Route path="/Favoritos" element={<Fav></Fav>} />
          <Route path="/Escaneo" element={<Escaneo></Escaneo>} />
          <Route path="/DiarioLocal" element={<DiarioLocal></DiarioLocal>} />
          <Route path="/DiarioGlobal" element={<DiarioGlobal></DiarioGlobal>} />
          <Route path="/Terminado" element={<RegistroTerminado></RegistroTerminado>} />

          <Route path="/Buscar" element={<Buscar></Buscar>} />

          <Route path="/Buscar" element={<Buscar></Buscar>} />  
          <Route path="/Valoraciones" element={<Valoraciones></Valoraciones>} />
          <Route path="/Traductor" element={<Traductor></Traductor>} />

        </Routes>
        </ApplergicContextProvider> 
    </Router>
    </MyContext.Provider>  

</JwtContext.Provider>

    )
}

export default App;
