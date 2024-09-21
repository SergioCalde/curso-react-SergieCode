import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const ShopPage = () => {

    
    const { products } = useContext( ProductContext );
    const { addItem, 
            deleteItem } = useContext( CartContext );

    const handleAdd = (product) => {
        addItem(product);
    }
    const handleDelete = (id) => {
        deleteItem(id);
    }

  return (
    <>
        <h1>Compras: </h1>
        <hr />
        {products.map(product => (
            <Card
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                handleAdd={() => handleAdd(product)}
                handleDelete={() => handleDelete(product.id)}
            >
            </Card>
        ))}
    </>
  )
}
