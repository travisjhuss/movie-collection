import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail.jsx';
import AddMovie from '../AddMovie/AddMovie';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';

function App() {

  const styleAddBtn = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  return (
    <div className="App">
      <AppBar>
        <h2>Travis's Movie DataBase!</h2>
      </AppBar>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details" exact>
          <MovieDetail />
        </Route>

        {/* Add Movie page */}
        <Route path="/add" exact>
          <AddMovie />
        </Route>

        {/* floating button to open AddMovie */}
        <Link to="/add">
          <Fab color="primary" style={styleAddBtn} >
            <AddIcon />
          </Fab>
        </Link>
      </Router>
    </div>
  );
}


export default App;
