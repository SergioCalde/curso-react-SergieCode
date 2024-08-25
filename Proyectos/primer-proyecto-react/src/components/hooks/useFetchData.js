import { useState, useEffect } from "react";
import { fetchData } from "../../helpers/fetchData";

export const useFetchData = ( endPoint ) => {

  const url = `http://jsonplaceholder.typicode.com/${endPoint}`;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    
    //Hook que permite que al iniciar el componente, 
    // solo se ejecute una vez. (De no llamarlo, se ejecutaría infinitamente.)
    //useEffect( () => {}, [])
    // al poner el endpoint en el array escucha el cambio. 
    useEffect( () => {
      fetchData( url )
        .then(res => {
          setData(res.data);
          setIsLoading(res.isLoading);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ endPoint ]);

  return {
    data,
    isLoading
  }
}
