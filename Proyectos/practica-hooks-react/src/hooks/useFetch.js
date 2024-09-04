import { useState, useEffect } from "react"

export const useFetch = (url) => {
     
    const [state, setstate] = useState({
        data : null,
        isLoading: true,
        errors: null
    });

    const { data, isLoading, errors } = state;

    const getFetch = async () => {
        try{

            const response = await fetch(url);
            const data = await response.json();

            setstate({
                data: data,
                isLoading: false,
                errors: null
            })

        }catch(error) {
            setstate({
                data: null,
                isLoading: false,
                errors: error
            })
        }
    }

    useEffect(() => {
        if (!url) return
        getFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    
    return {
        data,
        isLoading,
        errors
    }
}
