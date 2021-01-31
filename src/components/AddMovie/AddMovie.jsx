import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css';

function AddMovie({ handleClose }) {
    // Custom theme for form
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#fff4dd'
            }
        }
    })
    // style to change background color 
    const styleForm = {
        backgroundColor: '#a0432c',
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    // get genres from genre reducer
    const genres = useSelector(store => store.genres);
    // states to store new movie data
    const [genreNames, setGenreNames] = useState([]);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [moviePoster, setMoviePoster] = useState('');

    const handleChange = (event) => {
        setGenreNames(event.target.value);
    };

    const handleAddMovie = () => {
        // loop over array of genre names and get IDs from genres
        const genreIds = [];
        for (let x = 0; x < genreNames.length; x++) {
            for (let i = 0; i < genres.length; i++) {
                // push matching IDs into array
                if (genreNames[x] === genres[i].name) {
                    genreIds.push(genres[i].id)
                }
            }
        }
        // console.log('genreIds:', genreIds);
        // package movie to post
        const movieToAdd = {
            title: movieTitle,
            poster: moviePoster,
            description: movieDescription,
            genre_ids: genreIds
        }
        // console.log('movieToAdd:', movieToAdd);
        dispatch({ type: 'ADD_MOVIE', payload: movieToAdd });
        // close dialog box
        handleClose();
        // refresh MovieList
        dispatch({ type: 'FETCH_MOVIES' });
    }

    // console.log('genres from DB:', genres);
    // console.log('genreNames:', genreNames);
    return (
        <div style={styleForm}>
            <ThemeProvider theme={theme}>
                <DialogTitle>
                    <div id="form-head">Add Movie...</div>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="title-input"
                        label="Movie Title"
                        type="text"
                        variant="outlined"
                        onChange={(event) => setMovieTitle(event.target.value)}
                    />
                    <br />
                    <TextField
                        margin="dense"
                        id="poster-url-input"
                        label="Movie Poster URL"
                        type="text"
                        variant="outlined"
                        onChange={(event) => setMoviePoster(event.target.value)}
                    />
                    <br />
                    <TextField
                        margin="dense"
                        id="description-input"
                        label="Description"
                        multiline
                        rows={4}
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(event) => setMovieDescription(event.target.value)}
                    />
                    <br />
                    <InputLabel id="genre-checkbox-label">Genres</InputLabel>
                    {/* Dropdown borrowed from Material UI's website */}
                    <Select
                        labelId="genre-checkbox-label"
                        id="genre-checkbox-input"
                        variant="outlined"
                        multiple
                        value={genreNames}
                        onChange={handleChange}
                        // input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre.id} value={genre.name} style={styleForm} id="checkbox">
                                <Checkbox color="primary" checked={genreNames.indexOf(genre.name) > -1} />
                                <ListItemText primary={genre.name} />
                            </MenuItem>
                        ))}
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={handleAddMovie} color="primary">
                        Save
            </Button>
                </DialogActions>
            </ThemeProvider>
        </div>
    );
} // end AddMovie

export default AddMovie;