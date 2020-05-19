import React, {useState} from 'react';
import MovieCard from './MovieCard';

// the useState allows state to be used in functional components, like with class components using a "constructor and super"
// does not use axios and rather uses try and catch to call the api
// 


export default function SearchMovies() {


    // states - one for query, one to hold movies
    // create state and update state when appropriate

    const [movies, setMovies] = useState([]);

    const [query, setQuery] = useState('');

    const searchMoviesHandler = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=9b08417459f02bab4f2533c48a22feab&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
            console.log(data);
        } catch(error) {
            console.log(error);
        }

    };
    return (
        <>
            <form action="" className="form" onSubmit={searchMoviesHandler}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input type="text" 
                className="input" 
                name="query" 
                placeholder="i.e. Infinity War"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                />
                <button className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => 
                    <MovieCard movie ={movie} key={movie.id}/>
                    )}
            </div>
        </>
    )
}