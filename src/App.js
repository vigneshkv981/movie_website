import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
      .then(response => {
        this.setState({
          movies: response.data.Search || [],
        });
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Listing Website</h1>     
        <div className="movie-list">
          {this.state.movies.map(movie => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <div className="overlay">
                <div className="movie-title">{movie.Title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
