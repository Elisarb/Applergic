
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Bienvenida from './Components/Pages/Bienvenida/Bienvenida';
import Portada from './Components/Pages/Portada/Portada';
import Registro from './Components/Pages/Registro/Registro';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Bienvenida></Bienvenida>} />
          <Route path="/Portada" element={<Portada></Portada>} />
          <Route path="/Registro" element={<Registro></Registro>} />
        </Routes>
    </Router>
   
    )
}

export default App;
