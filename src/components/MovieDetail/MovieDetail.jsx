import { useSelector } from "react-redux";

function MovieDetail() {

    // storing details from database
    const details = useSelector(store => store.details)
    // store genres of selected movie
    const genres = useSelector(store => store.selectedMovieGenres)

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
        </>
    )
} // end MovieDetail

export default MovieDetail;