import { useState } from "react";
import { useAlumnoContext } from "../context/AlumnoContext";

function EditarAlumno() {
  const { alumno, actualizarAlumno } = useAlumnoContext();

  // Iniciamos el formulario con los datos que ya están en el contexto
  const [formulario, setFormulario] = useState({
    nombre: alumno.nombre,
    carrera: alumno.carrera,
    grupo: alumno.grupo,
    semestre: alumno.semestre,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarAlumno(formulario);
    alert("Información actualizada correctamente");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Editar información del alumno</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <div>
          <label>Nombre: </label>
          <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Carrera: </label>
          <input type="text" name="carrera" value={formulario.carrera} onChange={handleChange} />
        </div>
        <div>
          <label>Grupo: </label>
          <input type="text" name="grupo" value={formulario.grupo} onChange={handleChange} />
        </div>
        <div>
          <label>Semestre: </label>
          <input type="text" name="semestre" value={formulario.semestre} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: '10px', cursor: 'pointer' }}>Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditarAlumno;