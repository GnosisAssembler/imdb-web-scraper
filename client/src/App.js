import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state ={
        articles: []
      };
  }

  componentDidMount() {
    
    fetch('/scraper')
      .then(res => { 
        return res.json()
      })
      .then(articles => {
        this.setState({ articles  })
      });

  }

  render() {
    return (
      <div className="App">
        <h1>IMDB Movie Scraper</h1>
        <hr></hr>
          {this.state.articles.map(article =>
              <div className="Content">
                <h1>{article.title}</h1>
                <h2>Release date:</h2> <p>{article.release}</p>
                <h3>Rating: </h3> <p>{article.rating}</p>
              </div>
          )}
      </div>
    );
  }

}

export default App;
