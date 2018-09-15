# IMDB-Web-Scraper
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


### Example

The server is doing a request call on a URL on IMDB, the request will capture the HTML of the website and pass it along to the server.
Then the DOM will be traversed and the required information (title, release date and rating) will be returned as a response.

Using particular css selectors with the help of cheerio.js, the web scraper is capturing the information we need

![title-release](img/title-release.png?raw=true)

```javascript
$('.title_wrapper').filter(function(){
  let captured_data = $(this);
  title = captured_data.children().first().text();
  json.title = title;
})

```

![rate](img/rate.png?raw=true)

```javascript
$('.ratingValue').filter(function(){
    let captured_data = $(this);
    rating = captured_data.children().first().text();
    json.rating = rating;
})
```

### License
---
The MIT License (MIT)

Copyright (c) 2018 Panagiotis Karipiadis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
