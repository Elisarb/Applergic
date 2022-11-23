
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Bienvenida from './Components/Pages/Bienvenida/Bienvenida';
import Portada from './Components/Pages/Portada/Portada';
import Registro from './Components/Pages/Registro/Registro';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Bienvenida></Bienvenida>} />
          <Route path="/Portada" element={<Portada></Portada>} />
          <Route path="/Registro" element={<Registro></Registro>} />
          <Route path="/Home" element={<Home></Home>} />
        </Routes>
    </Router>
   
    )
}

export default App;
