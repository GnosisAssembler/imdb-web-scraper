# IMDB-Web-Scraper
![version 1.1.0](https://img.shields.io/badge/version-1.1.0-brightgreen.svg)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg)](https://github.com/pankaryp/IMDB-Web-Scraper.git)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/pankaryp/IMDB-Web-Scraper.git)

React Web scraper using Node.js and Cheerio.js to retrieve information about a movie in IMDB.

### Prerequisites
[Node.js](https://nodejs.org/en/)

### Installing
```
# Go to your project directory
cd my-scraper

# Clone the repository
git clone https://github.com/pankaryp/IMDB-Web-Scraper.git

# Install server dependencies
npm install

# Install client dependencies
npm run client-install
```

### Start the server
```
npm run dev
```


#### Example

The server is doing a request call on a URL on IMDB, the request will capture the HTML of the website and pass it along to the server.
Then the DOM will be traversed and the required information (title, release date and rating) will be returned as a response.

Using particular css selectors with the help of cheerio.js, the web scraper is capturing the information we need

```javascript
$('.title_wrapper').filter(function(){
  let captured_data = $(this);
  title = captured_data.children().first().text();
  json.title = title;
})

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
