import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField, makeStyles, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
    }}
})



function Search() {
    
    const classes = useStyles();

    return (
        <div id="search-field">
            <TextField
                className={classes.root}
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon id="search-icon"/>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}

export default Search;