import './SearchResults.css';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

function SearchResults({searchResults}) {

    const history = useHistory();

     // when image clicked
     const handleClick = (id) => {
        // console.log('image clicked on ID:', id);
        history.push(`/details/${id}`);
    } // end handleClick

    return(
        <section className="movies">
                {searchResults.map(movie => {
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
    )
}

export default SearchResults;