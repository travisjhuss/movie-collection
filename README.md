# Project Name

The Travis Movie Database (TMDb)

To set-up
1. npm install
2. set up database.sql in database folder (note: original varchar limit removed from poster)

## Description

TMDb is a simple movie organization app built using React, Redux, and Material UI. This assignment from Prime was a great way to work with databases and joining tables. A lot of my time was spent on figuring out the right sql queries for adding and getting data as well as setting up reducers and sagas. 

In my MovieDetails page I wasn't sure how to address getting the correlating genres and the movie details together. I was able to do so in one query but couldn't figure out how to un-package it on the front end. Instead I separated the two pieces of data into two separate dispatches. From there is was easy to sort through it on the front end. 

Once I got the MovieDetails age working I moved to the AddMovie page. Though the assignment called for the add to be in its own page I really wanted to work with a pop up form. I added a floating action button and used Dialog from MUI to make that happen. The form can be used anywhere however if used on the movie detail page it will not move back to the movie list. couldn't figure out a work around for this. 

I used MUI's checkbox dropdown to pick genres. I knew I wanted to be able to select multiple genres from the get go despite it not being required for base mode. The code the MUI website provided help greatly and did a lot of the work for me. I just had to change the variable to my genre reducer and was able to populate the menu quickly. 

Handling those genres on the back end proved much more difficult. My dear friend Kevin proved to be a resource here as he had figured it out the night before. He gave me some breadcrumbs to follow and was able to concatenate a string using the data in my selected genre array. 

Once all the functionality was working I moved to styling. I generated a color palette from a photo of my favorite theater, the Oriental Theater in Milwaukee WI. I made a gradient for the header to resemble a red curtain like the one in the theater. Google Fonts had a font that made me think old theater and I think it works well with this project. I still rely heavily on working around the MUI styling but am starting to understand how to use themes and inline styling more. I played around more with transforms too and have the posters "pop-out" when they are hovered over. 

Fun stuff. I think this project provide a lot of great ground work for upcoming solo projects. 





