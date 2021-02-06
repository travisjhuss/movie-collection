import { TextField, makeStyles, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

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

    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('clicked search,', searchText);
    }

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
                endIcon={<SearchIcon />}
                onClick={handleSearch}
            >
                Search
            </Button>
        </div>
    )
}

export default Search;