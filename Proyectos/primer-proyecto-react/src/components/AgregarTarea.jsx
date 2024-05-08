/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"

export const AgregarTarea = ({ agregarTarea }) => {

    const [inputValue, setinputValue] = useState('')
    const onInputChange = ({ target}) => {
        setinputValue( target.value )
    }

    const onSubmit = ( event ) => {
        // const envio = {
        //     nombre: inputValue,
        //     visto: false
        // }
        event.preventDefault();
        // agregarTarea(tareas => [...tareas, envio])
        agregarTarea(inputValue)
        setinputValue("");
    }

  return (
    <>
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Tarea nueva"
            value={inputValue}
            onChange={ onInputChange }
        /> 
    </form>
    </>
  )
}
