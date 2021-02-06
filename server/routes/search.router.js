const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {

    console.log('GET for search triggered:', req.query);
    // if search was more than 1 word, split into an array with each word as an element
    const searchArray = req.query.q.split(' ');
    // variable to handle query text for multiple words
    let newSearchQuery = '';
    // add the wildcard % before and after each word in array
    for(let i = 0; i < searchArray.length; i++) {
        searchArray[i] = `%${searchArray[i]}%`;
    }
    console.log('searchArray', searchArray);
    // create the $number for the query 
    for (let i = 1; i <=searchArray.length; i++) {
        newSearchQuery += `
            ("movies".title ILIKE $${i} OR 
            "genres".name ILIKE $${i} OR
            "movies".description ILIKE $${i}) AND`
    }
    // take of the last AND
    newSearchQuery = newSearchQuery.slice(0, -4);

    console.log('newSearchQuery after slice:', newSearchQuery);
    // plug query text with the $numbers into the sql query
    const query = `
        SELECT "movies".id, "movies".title, "movies".poster, "movies".description FROM "movies" 
        JOIN "movies_genres" on "movies".id = "movies_genres".movie_id
        JOIN "genres" on "movies_genres".genre_id = "genres".id
        WHERE ${newSearchQuery}
        GROUP BY "movies".id;
    `;
    pool.query(query, [...searchArray])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: search movies', err);
            res.sendStatus(500)
        })

});

module.exports = router;