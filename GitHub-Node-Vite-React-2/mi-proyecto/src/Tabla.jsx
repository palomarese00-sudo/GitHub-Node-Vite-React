import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const personas = [
  { nombre: "Juan", apellido: "Pérez", edad: 25 },
  { nombre: "Ana", apellido: "López", edad: 17 },
  { nombre: "Carlos", apellido: "Ramírez", edad: 30 },
  { nombre: "Sofía", apellido: "García", edad: 15 },
  { nombre: "Luis", apellido: "Martínez", edad: 22 },
  { nombre: "Elena", apellido: "Hernández", edad: 19 }
];

function Tabla() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {personas.map((persona, index) => (
            <TableRow key={index}>
              <TableCell>{persona.nombre}</TableCell>
              <TableCell>{persona.apellido}</TableCell>
              <TableCell>{persona.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default Tabla;