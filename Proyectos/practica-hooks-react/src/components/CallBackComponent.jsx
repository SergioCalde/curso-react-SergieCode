import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"


export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0);

    const incrementarPadre = useCallback(
        (value) => {
            setCounter( contador => contador + value);
        }, []
    )

  return (
    <>
        <h1>Contador: { counter }</h1>
        <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  )
}

