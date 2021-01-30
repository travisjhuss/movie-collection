import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // when image clicked
    const handleClick = (id) => {
        console.log('image clicked on ID:', id);
        dispatch({type: 'FETCH_DETAILS', payload: id});
        dispatch({type: 'FETCH_SELECTED_MOVIE_GENRES', payload: id});
        history.push('/details');
    } // end handleClick

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => {handleClick(movie.id)}}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;