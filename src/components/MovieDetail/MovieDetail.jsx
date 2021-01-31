import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Paper, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./MovieDetail.css";
import { useEffect } from "react";


function MovieDetail() {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS', payload: id});
        dispatch({type: 'FETCH_SELECTED_MOVIE_GENRES', payload: id});
    }, []);

    const history = useHistory();

    // storing details from database
    const details = useSelector(store => store.details)
    // store genres of selected movie
    const genres = useSelector(store => store.selectedMovieGenres)

    // function to return to list component
    const backToList = () => {
        // console.log('clicked back button');
        history.push('/');
    }

    // console.log('details from DB:', details);
    // console.log('genres from DB:', genres);
    return (
        <Paper variant="outlined" id="details-container">
            <div id="poster">
                <img
                    src={details.poster}
                    width="185"
                    height="272"
                />
            </div>
            <div id="title">{details.title}</div>
            <div id="genre">
                {genres.map((genres, i) => {
                    return (<span className="genre-tag" key={i}>{genres.genre}</span>)
                })}
            </div>
            <div id="description">{details.description}</div>
            <Button id="button" onClick={backToList}><ArrowBackIcon id="back-arrow" /></Button>
        </Paper>
    )
} // end MovieDetail

export default MovieDetail;