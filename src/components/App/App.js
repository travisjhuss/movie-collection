import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail.jsx';
import AddMovie from '../AddMovie/AddMovie';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import { useState } from 'react';

function App() {

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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <AppBar id="header">
        <div id="app-name">the Travis Movie Database</div>
      </AppBar>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details" exact>
          <MovieDetail />
        </Route>

        {/* Add Movie page in a popup */}
        <Dialog 
          fullWidth
          maxWidth="sm" 
          open={open} 
          onClose={handleClose}
        >
          <AddMovie handleClose={handleClose}/>
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
