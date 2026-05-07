function Tablas() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contenido de Tablas</h1>
      {/* PEGA AQUÍ EL CONTENIDO QUE TENÍAS EN APP.JSX ORIGINALMENTE */}
      <table border="1">
        <thead>
          <tr>
            <th>Ejemplo</th>
            <th>Dato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fila 1</td>
            <td>Dato 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tablas;
