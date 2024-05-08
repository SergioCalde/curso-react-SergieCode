import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const ContadorApp = ({ value }) => {

    const [count, setCount] = useState( value )

    const handleClick = () => { 
        setCount(count + 1)
    }

    return (
        <>
            <h1>Contador: </h1>
            <p>{ count }</p>
            <button onClick={handleClick}>
                Soy un botón
            </button>
        </>
    )
}