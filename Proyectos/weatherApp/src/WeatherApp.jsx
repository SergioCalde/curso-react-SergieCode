
import { useState } from "react"

export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = import.meta.env.VITE_API_KEY;
    const difKelvin = 273.15;

    const [city, setCity] = useState('');

    const [dataWeather, setDataWeather] = useState(null)

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(city.length > 0) fetchClima();
    }

    const fetchClima = async () => {
        try{
            let urlWeather = `${ urlBase }?q=${city}&appid=${API_KEY}`
            const response = await fetch(urlWeather)
            const data = await response.json();

            setDataWeather(data);
            console.log(dataWeather);

        }catch(error) {
            console.error('Ocurrió el siguiente error:',error);
        }
    }


  return (
    <div className="container">

        <h1>Weather App</h1>

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={city}
                onChange={handleCityChange}
                />
            <button type="submit">Search</button>
        </form>

        {
            dataWeather && (
                <div>
                    <h2>{ dataWeather.name }, { dataWeather.sys.country}</h2>
                    <p>Temperature: { parseInt( dataWeather?.main?.temp - difKelvin ) }°C</p>
                    <p>Weather Conditions: { dataWeather?.weather[0]?.description }</p>
                    <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt={dataWeather?.weather[0]?.description} />
                </div>
            )
        }
    </div>
  )
}
