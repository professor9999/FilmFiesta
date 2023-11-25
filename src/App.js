import React, { useState, useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';
import Moviecard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=f407bb1f';

    
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchMovies(searchTerm);
        }
    }

    const fetchRandomMovies = async () => {
        const getRandomQueryTerm = () => {
            const queryTerms = ["action", "comedy", "drama", "adventure", "sci-fi", "fantasy", "thriller", "animation"];
            const randomIndex = Math.floor(Math.random() * queryTerms.length);
            return queryTerms[randomIndex];
        };

        for (let i = 0; i < 10; i++) {
            const randomQueryTerm = getRandomQueryTerm();
            const response = await fetch(`${API_URL}&s=${randomQueryTerm}&type=movie&page=1&r=json`);
            const data = await response.json();

            const categoryMovies = data.Search ? data.Search.slice(0, 3) : [];
            setMovies(prevMovies => [...prevMovies, ...categoryMovies]);
        }
    };

    useEffect(() => {
        fetchRandomMovies();
    }, []);
    
    
    return(
        <div className="app">
            <h1> FilmFiesta</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value= {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={()=> searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <Moviecard tempMovie1={movie} />
                        ))}
                    </div>
                ):
                (
                    <div className="empty">
                        <h3>No movie found</h3> 
                    </div>
                )
            }
            
        </div>
    );
}

export default App;
 