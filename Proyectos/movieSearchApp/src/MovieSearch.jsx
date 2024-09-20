import { useState } from "react"


export const MovieSearch = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);


    const handleInputChange = ( e ) => {
        setSearch(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        fetchMovies();
    }

    const fetchMovies = async () => {
        try{

            let urlMovie = `${ urlBase }?query=${search}&api_key=${API_KEY}`
            const response = await fetch(urlMovie)
            const data = await response.json();
            setMovies(data.results || []);

        }catch(error){
            console.error('An error has ocurred:',error);
        }
    }

  return (
    <div className="container">
        <h1 className="title">Movie Search</h1>

        <form onSubmit={handleSubmit}>
            
            <input 
                type="text"
                placeholder="Search a Movie"
                value={search}
                onChange={handleInputChange}
            />

            <button type="submit" className="search-button">Submit</button>

        </form>



        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>

    </div>
  )
}
