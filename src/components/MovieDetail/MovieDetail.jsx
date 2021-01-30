import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetail() {

    const history = useHistory();

    // storing details from database
    const details = useSelector(store => store.details)
    // store genres of selected movie
    const genres = useSelector(store => store.selectedMovieGenres)

    // function to return to list component
    const backToList = () => {
        console.log('clicked back button');
        history.push('/')
    }

    console.log('details from DB:', details);
    console.log('genres from DB:', genres);
    return (
        <>
        <h3>Title: {details.title}</h3>
        <div>Genre: {genres.map((genres, i) => {
            return(<p key={i}>{genres.genre}</p>)
        })}
        </div>
        <p>{details.description}</p>
        <button onClick={backToList}>Back to List</button>
        </>
    )
} // end MovieDetail

export default MovieDetail;