// Require Dependencies
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

// Init app
const app = express();

app.get('/scraper', function(req, res) {

    // The URL - the movie 'The Nun' from IMDB.
    url = 'https://www.imdb.com/title/tt5814060/';

    // The Request call has 2 params,
    // the first parameter is URL
    // and the second one is a callback function which takes 3 parameters, an error, response and html
    request(url, function(error, response, html){

        // Check for errors while making the request
        if(!error){
            // Utilize the cheerio.js on the returned html for jQuery functionality
            let $ = cheerio.load(html);
            // Declare variables that are going to be captured from the scraping
            let title_release, duration, rating;
            let json = { title : "", release : "", rating : ""};

            // Use the title_wrapper class as a starting point for the title
            $('.title_wrapper').filter(function(){
                // Store the data on a variable
                let data = $(this);
                // The first child element of the title_wrapper class is the h1 aka the title and release date of the movie 
                title = data.children().first().text();
                // Store title on json object
                json.title = title;
            })
            // Use the subtext class as a starting point for the release
            $('.subtext').filter(function(){
                // Store the data on a variable
                let data = $(this);
                // The last child element of the subtext class is an a element which contains the release date
                release = data.children().last().text();
                // Store release on json object
                json.release = release;
            })
            // Use the ratingValue class as a starting point for the rating
            $('.ratingValue').filter(function(){
                // Store the data on a variable
                let data = $(this);
                // The first child element of the ratingValue class is the rating
                rating = data.children().first().text();
                // Store rating on json object
                json.rating = rating;
            })
            // Output the json file
            console.log(json);
        }
    })
})

// Listen on port 3000
app.listen('3000')
console.log('Server running on port 3000...');