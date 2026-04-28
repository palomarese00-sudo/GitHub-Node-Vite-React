import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/acerca">Acerca de mí</Link> |{" "}
      <Link to="/contacto">Contacto</Link> |{" "}
      <Link to="/tablas">Tablas</Link>
    </nav>
  );
}

export default Navbar;