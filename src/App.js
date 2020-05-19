import React, {Component} from 'react';
import './App.css';

import SearchMovies from "./SearchMovies";



class App extends Component {
  render () {
    return (
      <div className="container">
        <h1 className="title">Hooke me a movie!!</h1>
        <SearchMovies />
      </div>
    )
  }
}
export default App;
