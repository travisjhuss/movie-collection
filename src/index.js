import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchMovieDetails);
    yield takeEvery('FETCH_SELECTED_MOVIE_GENRES', fetchSelectedMovieGenres)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchSelectedMovieGenres(action) {
    // fetch details from selected movie poster
    try {
        console.log('FETCH_SELECTED_MOVIE_GENRES action.payload:', action.payload);
        const response = yield axios.get(`/api/movie/genres/${action.payload}`);
        console.log(response.data);
        // put it in its own reducer
        yield put({type: 'SET_SELECTED_MOVIE_GENRES', payload: response.data})
    } catch(err) {
        console.log('Error in get selected movie genres', err);
    }
}

function* fetchMovieDetails(action) {
    // fetch details from selected movie poster
    try {
        console.log('FETCH_DETAILS action.payload:', action.payload);
        const response = yield axios.get(`/api/movie/${action.payload}`);
        console.log(response.data[0]);
        // put it in its own reducer
        yield put({type: 'SET_DETAILS', payload: response.data[0]})
    } catch(err) {
        console.log('Error in get movie details', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store details from selected movie
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

const selectedMovieGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVIE_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        selectedMovieGenres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
