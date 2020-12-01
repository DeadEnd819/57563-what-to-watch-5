import React from "react";
import PropTypes from "prop-types";


const MovieGenresItem = ({genre, activeGenre, onGenreClick}) => {
  return (
    <li className={`catalog__genres-item ${(genre === activeGenre) ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={onGenreClick}>
        {genre}
      </a>
    </li>
  );
};

MovieGenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default MovieGenresItem;
