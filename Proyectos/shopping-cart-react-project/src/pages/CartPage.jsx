import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartPage = () => {

    const { itemList, 
            increaseQuantity, 
            decreaseQuantity, 
            deleteItem } = useContext( CartContext );

    const calcularTotal = () => {
        return itemList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }

    const handleCheckout = () => {

        print()
    }

  return (
    <>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                
                { itemList.map(item => (
                        <tr key={item.id}>
                        <th >{ item.title }</th>
                        <td>${ item.price }</td>
                        <td>
                            <button 
                                className="btn btn-outline-primary" 
                                onClick={ () => decreaseQuantity(item.id) }>
                                    -
                            </button>
                            <button className="btn btn-primary">{item.quantity}</button>
                            <button 
                                className="btn btn-outline-primary" 
                                onClick={ () => increaseQuantity(item.id) }>
                                    +                                    
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteItem(item.id)}>
                                    Delete
                            </button>
                        </td>
                        </tr>
                    ))
                }
                <tr>
                <th><b>TOTAL: </b></th>
                <td></td>
                <td></td>
                <td>${ calcularTotal() }</td>
                </tr>
            </tbody>
        </table>

        <div className="d-grid gap-2">
            <button 
            className="btn btn-success"
            onClick={handleCheckout}
            disabled={ itemList < 1 }
            >Proceed to checkout</button>
        </div>
    </>
  )
}
