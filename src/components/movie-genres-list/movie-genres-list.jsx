import React from "react";
import PropTypes from "prop-types";
import MovieGenresItem from "../movie-genres-item/movie-genres-item";


const MovieGenresList = (props) => {
  const {genresList} = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre, i) => (
        <MovieGenresItem key ={i + genre} {...props} genre={genre} />
      ))}
    </ul>
  );
};

MovieGenresList.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieGenresList;
