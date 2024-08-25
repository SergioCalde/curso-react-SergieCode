import { useState } from "react"

export const useCounter = ( initialValue = 0 ) => {

    const [ counter, setCounter ] = useState( initialValue );

    const increment = ( incremetValue = 1 ) => {
        setCounter( counter + incremetValue)
    }
    
    const decrement = ( decrementValue = 1, allowNegative = true ) => {
        if( !allowNegative && counter - decrementValue < 0 ) {
            setCounter( 0 )
            return
        }
        setCounter( counter - decrementValue )
    }

    const reset = () => {
        setCounter( initialValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
