
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


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Bienvenida></Bienvenida>} />
          <Route path="/Portada" element={<Portada></Portada>} />

          <Route path="/login" element={<Login></Login>} />
          <Route path="/Registro" element={<Registro></Registro>} />
          <Route path="/Emergencias" element={<RegistroSos></RegistroSos>} />
          <Route path="/RegistroAlergias" element={<RegistroAlergias></RegistroAlergias>} />
          <Route path="/Home" element={<Home></Home>} />
          <Route path="/Favoritos" element={<Fav></Fav>} />


        </Routes>
    </Router>
   
    )
}

export default App;
