import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Acerca from "./pages/Acerca "; // <--- Línea corregida
import Tablas from "./pages/Tablas";

// Componentes temporales para que no de error
const Home = () => <h1 style={{padding: '20px'}}>Bienvenido al Inicio</h1>;
const Contacto = () => <h1 style={{padding: '20px'}}>Página de Contacto</h1>;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tablas" element={<Tablas />} />
      </Routes>
    </>
  );
}

export default App;