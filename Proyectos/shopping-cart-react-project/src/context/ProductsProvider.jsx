import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContext"

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProductos = async () => {
        const urlProducts = import.meta.env.VITE_URL_BASE + 'products';
        const response = await fetch(urlProducts);
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
      
        fetchProductos()

    }, [])


  return (
    <ProductContext.Provider value={{ products }}>
        { children }
    </ProductContext.Provider>
  )
}
