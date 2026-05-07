import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno, setAlumno] = useState({
    nombre: "Tu Nombre Aquí",
    carrera: "Licenciatura en Informática",
    grupo: "5-1",
    semestre: "6to",
  });

  // Esta función recibirá los nuevos datos y actualizará el estado global
  const actualizarAlumno = (nuevosDatos) => {
    setAlumno(nuevosDatos);
  };

  return (
    <AlumnoContext.Provider value={{ alumno, actualizarAlumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}