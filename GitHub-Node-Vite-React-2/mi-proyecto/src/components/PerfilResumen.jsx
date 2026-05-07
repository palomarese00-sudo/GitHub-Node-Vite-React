// src/components/PerfilResumen.jsx
import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', margin: '10px 0' }}>
      <h3>Resumen del Alumno</h3>
      <p>👤 {alumno.nombre} | 🎓 {alumno.carrera}</p>
    </div>
  );
}

export default PerfilResumen;
