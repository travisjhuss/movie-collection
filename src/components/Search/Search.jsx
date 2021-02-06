import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField, makeStyles, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';

import './Search.css';

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fff4dd',
            },
            '&:hover fieldset': {
                borderColor: ' #ad4830',
            }
        }
    }
})



function Search() {

    const classes = useStyles();

    const [searchText, setSearchText] = useState('');

    return (
        <div id="search-field">
            <TextField
                id="search-text"
                className={classes.root}
                variant="outlined"
                color='secondary'
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
            />
            <Button
                id="search-submit"
                variant="contained"
                color="secondary"
            >
                Search
            </Button>
        </div>
    )
}

export default Search;