function Acerca() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Acerca de mí</h1>
      <p><strong>Nombre:</strong> Victor Eduardo Vizcarra Palomares </p>
      <p><strong>Carrera:</strong> Licenciatura en informatica </p>

      <p>
        Actualmente soy estudiante de licenciatura en informatica y me apasiona el mundo del desarrollo de software. 
        Me gusta entender cómo funcionan las aplicaciones por dentro, desde la lógica del servidor hasta la interfaz. 
        Mi objetivo es convertirme en un desarrollador Fullstack capaz de crear soluciones digitales innovadoras. 
        Disfruto mucho resolviendo problemas complejos y aprendiendo nuevas librerías como React. 
        En mi tiempo libre, suelo investigar sobre las últimas tendencias en tecnología y optimización de código.
      </p>

      <h3>Habilidades</h3>
      <ul>
        <li>HTML5 / CSS3</li>
        <li>JavaScript Moderno (ES6+)</li>
        <li>React y React Router</li>
        <li>Gestión de Bases de Datos</li>
      </ul>

      <img
        src="https://via.placeholder.com/150" 
        alt="Foto de perfil"
        style={{ borderRadius: '10px', marginTop: '10px' }}
      />
    </div>
  );
}

export default Acerca;