import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from "./App"
// REVISA ESTA LÍNEA: Debe tener las llaves { }
import { AlumnoProvider } from "./context/AlumnoContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AlumnoProvider>
        <App />
      </AlumnoProvider>
    </BrowserRouter>
  </React.StrictMode>
);