# imdb-web-scraper

![work in_progress](https://img.shields.io/badge/work-in_progress-yellow.svg?style=flat-square)

> A web scraper using node.js and cheerios.js to retrieve the title, the release date and the rating of movies in IMDB.

### Prerequisites
[Node.js](https://nodejs.org/en/)

### Installing
```sh
# Clone the repository
git clone https://github.com/pankaryp/imdb-web-scraper.git
cd imdb-web-scraper

# Install server dependencies
npm install

# Install client dependencies
npm run client-install
```

### Run the app
```
npm run dev
```


#### Example

The server will do a request call on a URL on IMDB, the request will capture the HTML of the website and pass it along to the server.
Then the DOM will be traversed and the required information (title, release date and rating) will be returned as a response.

Using particular css selectors with the help of cheerio.js, the web scraper is capturing the information we need.

```javascript
$('.title_wrapper').filter(function(){
  let captured_data = $(this);
  title = captured_data.children().first().text();
  json.title = title;
})

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
