import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Acerca from "./pages/Acerca "; // <--- Línea corregida
import Tablas from "./pages/Tablas";
import EditarAlumno from "./pages/EditarAlumno";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Tabla from "./pages/Tabla";



// Componentes temporales para que no de error
//const Home = () => <h1 style={{padding: '20px'}}>Bienvenido al Inicio</h1>;
//const Contacto = () => <h1 style={{padding: '20px'}}>Página de Contacto</h1>;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tabla" element={<Tabla />} />
        <Route path="/editar-alumno" element={<EditarAlumno />} />
      </Routes>
    </>
  );
}


export default App;