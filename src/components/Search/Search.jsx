import { TextField, makeStyles, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
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
    const searchResults = useSelector(store => store.searchResults);

    const [searchText, setSearchText] = useState('');

    const [isThereSearch, setIsThereSearch] = useState(false);

    const handleSearch = () => {
        console.log('clicked search,', searchText);
        dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: searchText });
        setIsThereSearch(true);
    }

    console.log('searchResults in React:', searchResults);
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
            {isThereSearch ? <h4>Search Results</h4> : null}
            <SearchResults searchResults={searchResults} />
        </div>
    )
}

export default Search;