Movie App Assignment

To-do

[x] - go over app, chart relationships across files
[x] - npm install
[x] - npm install material icons

Database
[x] - Create a database named `saga_movies_weekend`
[x] - Run the queries from `/database/database.sql` 


Components
[ ] - App
    [x] - import Details
    [x] - import MovieList
[ ] - Details
    [x] - show all genres of a given movie
        [x] - reducer for genres, map over
    [x] - back to list button
[ ] - AddMovie
    [x] - an input field (for the movie title)
    [x] - an input field (for the movie poster image URL)
    [x] - a textarea (for the movie description)
    [x] - a dropdown (for the genres)
    [x] - `Cancel` button, which should bring the user to the Home/List Page
    [ ] - `Save` button, which should update the title and description in the database and bring the user to the Home/List Page 
          (which now has the new movie)


General
    [ ] - Invest some time in styling it up!
    [ ] - Research cards for your movie posters on the list page
    [ ] - Research grids for your movie posters on the Movie List page
    [ ] - Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
    [ ] - Comment your code.
    [ ] - Update this README to include a description of the project in your own words.


Stretch
[ ] - Allow the app to maintain on refresh our details page.
      Research [React Router URL PARAMS](https://reactrouter.com/web/example/url-params) 
[ ] - Add to the detail page an edit button that brings the user to the edit page.
    [ ] - an input field (for changing the movie title), for the selected movie.
    [ ] - a textarea (for changing the movie description)
    [ ] - `Cancel` button, which should bring the user to the Details Page
    [ ] - `Save` button, which should update the title and description in the database and bring the user to the Details Page
