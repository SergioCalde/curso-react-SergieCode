import { useState } from "react"
import '../styles/Cart.css'




export const Card = ({image, title, description, price, handleAdd, handleDelete, handleIncrease, handleDecrease}) => {
  
    const [added, setAdded] = useState(false)

    const handleClickAdd = () => {
        handleAdd();
        setAdded(true);
    }

    const handleClickRemove = () => {
        handleDelete();
        setAdded(false);
    }

    return (
    <div className="tarjeta">
        <img src={ image } alt={ title } className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{ title }</h3>
            <p className="tarjeta-descripcion">{ description }</p>
            <p className="tarjeta-precio">${ price }</p>
            { added 
            ?   <button 
                    type="button" 
                    className="boton-quitar"
                    onClick={handleClickRemove}
                    >
                        Delete from Cart
                </button>
            :  <button 
                    type="button" 
                    className="boton-agregar"
                    onClick={handleClickAdd}
                    >
                        Add to Cart
                </button>}
        </div>


    </div>
  )
}
