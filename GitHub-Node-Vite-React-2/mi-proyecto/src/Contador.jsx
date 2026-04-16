import { useState, useEffect } from "react";

function Contador() {
  // 1. Definimos el estado
  const [count, setCount] = useState(0);

  // 2. Aplicamos la lógica de validación que pide tu actividad
  useEffect(() => {
    if (count > 10) {
      alert("No puede ser mayor a 10");
      setCount((count) => count = 10);
    }
    if (count < 0) {
      setCount((count) => count = 0);
    }
  }, [count]); // Este corchete le dice a React: "Vigila la variable count"

  // 3. Funciones para los botones (más claras)
  const sumar = () => setCount(count + 1);
  const restar = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button>valor contador {count} </button>
     
      <button onClick={() => setCount((count) => count + 1)}>
        Incrementar
      </button>

      <button onClick={restar} style={{ marginLeft: "10px" }}>
        Decrementar
      </button>
    </div>
  );
}

export default Contador;

