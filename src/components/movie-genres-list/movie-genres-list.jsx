import React from "react";
import PropTypes from "prop-types";


const MovieGenresList = (props) => {

  const {genresList, activeGenre, onGenreClick} = props;

  const onButtonClick = (evt) => {
    evt.preventDefault();
    const genre = evt.target.textContent;
    onGenreClick(genre);
  };

  return (
    <ul className="catalog__genres-list">

      {genresList.map((genre, i) => (
        <li key ={i + genre} className={`catalog__genres-item ${(genre === activeGenre) ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={onButtonClick}>
            {genre}
          </a>
        </li>
      ))}

    </ul>
  );
};

MovieGenresList.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default MovieGenresList;
