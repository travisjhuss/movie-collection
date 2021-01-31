import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import './MovieList.css';


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
        // dispatch({type: 'FETCH_DETAILS', payload: id});
        // dispatch({type: 'FETCH_SELECTED_MOVIE_GENRES', payload: id});
        history.push(`/details/${id}`);
    } // end handleClick

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Paper key={movie.id} elevation={6} id="movie-paper">
                            <img 
                                src={movie.poster} 
                                alt={movie.title} 
                                width="185"
                                height="272"
                                onClick={() => {handleClick(movie.id)}}/>
                        </Paper>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;