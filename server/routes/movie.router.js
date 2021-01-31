const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // GET for MovieList
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

router.post('/', (req, res) => {
  // POST for AddMovie
  const newMovie = req.body.newMovie
  console.log('in router, newMovie:', newMovie);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [newMovie.title, newMovie.poster, newMovie.description])
    .then(result => {
      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id
      // selected genres array from AddMovie
      const genresToAdd = req.body.newMovie.genre_ids;
      // loop over genre array and concatenate a string to put in sql
      let values = '';
      for (let i = 2; i <= genresToAdd.length + 1; i++) {
          values += `($1, $${i}),`;
      }
      values = values.slice(0, -1); // Takes off the last comma

      // Now handle the genre reference
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ${values};
      `

      console.log('genresToAdd:', genresToAdd);
      console.log('insertMovieGenreQuery:', insertMovieGenreQuery);
      
      
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, ...genresToAdd]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log('error in post to genres table:', err);
        res.sendStatus(500)
      })

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
})

// GET details from selected movie
router.get('/:id', (req, res) => {
  // Get id from req.params
  const id = req.params.id;
  console.log('get details for movie id:', id);
  const sqlText = `
                  SELECT "movies".id, "movies".title,"movies".description, "movies".poster FROM "movies"
                  WHERE "movies".id = $1;
                  `;
  pool.query(sqlText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// GET genres from selected movie
router.get('/genres/:id', (req, res) => {
  // Get id from req.params
  const id = req.params.id;
  console.log('get genres for movie id:', id);
  const sqlText = `
                  SELECT "genres".name AS "genre" FROM "movies"
                  JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
                  JOIN "genres" ON "movies_genres".genre_id = "genres".id
                  WHERE "movies".id = $1;
                  `;
  pool.query(sqlText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;