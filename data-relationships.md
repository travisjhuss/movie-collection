

APP.JS
    - MovieList '/'
        - useSelector -> movies --> index saga:fetchAllMovies:axios.get('/api/movie') --> router.get 
        - maps over movies

INDEX
    - 


Movie.router
    - get set up to get movie list from DB
    - post set up for adding movie, with genre

genre.router
    - empty get from genre DB
