import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail.jsx';
import AddMovie from '../AddMovie/AddMovie';
import Search from '../Search/Search';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import { useState } from 'react';

function App() {
  // style to position add button
  const styleAddBtn = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: '#ad4830',
    color: '#fff4dd'
  };
  // for dialog box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <AppBar id="header">
          <div id="app-name">the Travis Movie Database
        <Link to="/search">
              <IconButton id="search-btn">
                <SearchIcon />
              </IconButton>
            </Link>
          </div>
        </AppBar>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/search" exact>
          <Search />
        </Route>

        {/* Details page */}
        <Route path="/details/:id" exact>
          <MovieDetail />
        </Route>

        {/* Add Movie page in a popup */}
        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          onClose={handleClose}
        >
          <AddMovie handleClose={handleClose} />
        </Dialog>

        {/* floating button to open AddMovie */}
        <Fab id="add-btn" color="primary" style={styleAddBtn} onClick={handleClickOpen}>
          <AddIcon />
        </Fab>

      </Router>
    </div>
  );
}


export default App;
