/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✅" : "⛔"}
      {/* { visto && '✅'} */}
    </li>
  );
};
export const ListadoApp = () => {
  let listadoSecciones = [
    { id: 1, nombre: "Instalaciones necesarias", visto: true },
    { id: 2, nombre: "Uso de Vite", visto: true },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Variables", visto: true },
    { id: 5, nombre: "Props", visto: true },
    { id: 6, nombre: "Eventos", visto: true },
    { id: 7, nombre: "useState", visto: true },
    { id: 8, nombre: "Redux", visto: false },
    { id: 9, nombre: "customHooks", visto: false },
  ];
  const [arreglo, setarreglo] = useState(listadoSecciones);

  // const addTask = () => {
  //   setarreglo([ ...arreglo, {nombre: "Prueba", visto: false}]);
  // }

  const onAddTask = (val) => {
    if(val < 1) return
    const tarea = {
        id: arreglo.length + 1 , 
        nombre: val.trim(),
        visto: false
    }
    setarreglo([...arreglo, tarea]);
  }

  return (
    <>
        <h1>Lista de Temas del curso</h1>
        
        <AgregarTarea agregarTarea={ onAddTask }></AgregarTarea>

        <ol>
            {arreglo.map((item) => (
            <Items
                key={item.id}
                nombre={item.nombre}
                visto={item.visto}
            ></Items>
            ))}
        </ol>

      
    </>                             
  );
};
