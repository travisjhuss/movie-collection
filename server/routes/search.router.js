const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {

    console.log('GET for search triggered:', req.query);
    const searchText = `%${req.query.q}%`;
    const query = `
        SELECT "movies".id, "movies".title, "movies".poster, "movies".description FROM "movies" 
        JOIN "movies_genres" on "movies".id = "movies_genres".movie_id
        JOIN "genres" on "movies_genres".genre_id = "genres".id
        WHERE "movies".title ILIKE $1 OR 
        "genres".name ILIKE $1 OR
        "movies".description ILIKE $1
        GROUP BY "movies".id;
    `;
    pool.query(query, [searchText])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: search movies', err);
            res.sendStatus(500)
        })

});

module.exports = router;