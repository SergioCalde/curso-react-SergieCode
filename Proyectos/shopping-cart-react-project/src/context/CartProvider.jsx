import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = [];


export const CartProvider = ({ children }) => {

    const shopReducer = (state = initialState, action = {}) => {
        switch (action.type){
            case '[CART] Add Purchase':
                return [...state, action.payload];
            case '[CART] Increase Quantity':
                return state.map(item => {
                    const quantity = item.quantity + 1
                    if(item.id === action.payload) return {...item, quantity: quantity};
                    return item;
                })
            case '[CART] Decrease Quantity':
                return state.map(item => {
                        const quantity = item.quantity - 1
                        if(item.id === action.payload && item.quantity > 1) return {...item, quantity: quantity};
                        return item;
                   
                })
            case '[CART] Delete Item':
                return state.filter(item => item.id !== action.payload);
            default:
                return state;
        }
    }

    const [itemList, dispatch] = useReducer(shopReducer, initialState);

    const addItem = (purchase) => {
        purchase.quantity = 1;
        const action = {
            type: '[CART] Add Purchase',
            payload: purchase
        }
        dispatch(action);
    }

    const increaseQuantity = (id) => {
        const action = {
            type: '[CART] Increase Quantity',
            payload: id
        }
        dispatch(action);
    }

    const decreaseQuantity = (id) => {
        const action = {
            type: '[CART] Decrease Quantity',
            payload: id
        }
        dispatch(action);
    }

    const deleteItem = (id) => {
        const action = {
            type: '[CART] Delete Item',
            payload: id
        }
        dispatch(action);
    }

  return (

    <CartContext.Provider value={{ itemList, addItem, increaseQuantity, decreaseQuantity, deleteItem }}>
        {children}
    </CartContext.Provider>
  )
}
