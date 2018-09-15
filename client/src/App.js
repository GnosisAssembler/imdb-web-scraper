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
          {this.state.articles.map(article =>
              <div className="Content">
                <h1>{article.title}</h1>
                <h2>{article.release}</h2>
                <h3>{article.rating}</h3>
              </div>
          )}
      </div>
    );
  }

}

export default App;
