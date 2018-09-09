# IMDB-Web-Scraper
A simple web scraper using node.js and cheerio.js to retrieve the title, the release date and the rating of a movie in IMDB.

### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Cheerio.js](https://cheerio.js.org/)

### Installing
Clone the repository and run

```
npm install
```

### Start the server

```
node app.js
```

Now open http://localhost:3000/scraper to your browser and see the outputted info in your terminal.

### Example
The app is doing a request call on a URL on IMDB, the request will capture the HTML of the website and pass it along to the server.
Then the DOM will be traversed and the required information (title, release date and rating) will be exported in a json file, in the terminal.

Using particular css selectors with the help of cheerio.js, the web scraper is capturing the information we need

![title-release](img/title-release.png?raw=true)

```
$('.title_wrapper').filter(function(){
  let captured_data = $(this);
  title = captured_data.children().first().text();
  json.title = title;
})

```

![rate](img/rate.png?raw=true)

```
$('.ratingValue').filter(function(){
    let captured_data = $(this);
    rating = captured_data.children().first().text();
    json.rating = rating;
})
```

and then exports a json file in the terminal

![output](img/output.JPG?raw=true)



