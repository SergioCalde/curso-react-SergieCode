export const fetchData = async( url ) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            data,
            isLoading: false
        }
    }catch(error){
        console.log(error);
    }
}