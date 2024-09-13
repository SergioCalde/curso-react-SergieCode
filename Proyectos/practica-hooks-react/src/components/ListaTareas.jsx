import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const initialState = [{
    id : new Date().getTime(),
    tarea : "Explicar Reducers",
    finalizada : false
}]

const tareaReducer = (state = initialState, action = {}) => {

    // if( action.type === "[TAREAS] Agregar Tarea" ) {
    //     return [...state, action.payload];
    // }

    switch(action.type){
        case "[TAREAS] Agregar Tarea":
            return [...state, action.payload]
        case "[TAREAS] Finalizar Tarea":
            return state.map(
                tarea => {
                    if(tarea.id === action.payload){
                        return {
                            ...tarea,
                            finalizada: !tarea.finalizada
                        }
                    }
                    return tarea
                }
            )
        case "[TAREAS] Eliminar Tarea":
            return state.filter(tarea => tarea.id !== action.payload )
        case "[TAREAS] Borrar Tareas":
            return []
        default:
            return state;
    }

}

// console.log(tareaReducer( initialState, agregarTarea )  )

export const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const { tarea, formState, onInputChange } = useForm( { tarea: '' } )

    const addTask = (event) => {
        event.preventDefault();

        if(formState.tarea === '' ) return;
        // console.log(formState);

        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }

        const action = {
            type : '[TAREAS] Agregar Tarea',
            payload : tarea
        }

        dispatch(action)
    }

    const endTask = ({ id }) => {

        const action = {
            type: "[TAREAS] Finalizar Tarea",
            payload: id
        }

        dispatch(action);
    }

    const deleteTask = ({ id }) => {
        const action = {
            type: "[TAREAS] Eliminar Tarea",
            payload: id
        }

        dispatch(action);
    }

    const dropTask = () => {
        const action = {
            type: "[TAREAS] Borrar Tareas",
            payload: ""
        }

        dispatch(action);
    }

  return (
    <>
        <form onSubmit={addTask}>
            <div className="mb-3">
                <label htmlFor="tarea" className="form-label">Tarea</label>
                <input
                    type="text"
                    className="form-control"
                    name="tarea"
                    placeholder="Ingrese Tarea"
                    value= { tarea }
                    onChange= { onInputChange }/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <a className="btn btn-danger" onClick={ dropTask }>Drop all Tasks</a>
            </div>
        </form>

        <hr />

        <ul className="list-group">
            { state.map( item => {
               return (
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                        <span>
                            { item.tarea } { item.finalizada ? "✅":"⛔"}
                        </span>
                        <div>
                            <input 
                            type="checkbox"
                            value={item.finalizada} 
                            onChange={() => endTask(item)}/>
                            <button 
                                className="btn btn-outline-danger"
                                onClick={() => deleteTask(item)}>🗑️</button>
                        </div>
                    </li>
               )
            }) }
        </ul>
    </>
  )
}
