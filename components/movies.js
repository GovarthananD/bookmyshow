import { useEffect, useState } from "react";
import { API } from "./api";
import axios from 'axios';

const Movies = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios.get(`${API}/book`).then((res) => {
            if(res.status === 401) {
                console.log('Data not found')
            }
            setMovie(res.data)
        });
    };

    return(
        <div className="movie-list">
            
            {movie.map((film, index) => (
                <div key={film.index} className="movie-container">
                    <img src={film.photo} alt="pic" className="poster" />
                    <p className="movie-specs"><img className="star" src={require('../asset/star.png')} alt=""/><h5>{film.rating}</h5></p>
                    <h3 className="movie-name">{film.name}</h3>
                    <p className="movie-jouner">{film.jouner}</p>
                </div>
            ))}
        </div>
    )
}

export default Movies;