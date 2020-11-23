import React from "react";
import PropTypes from "prop-types";
import MovieGenresList from "../movie-genres-list/movie-genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import MovieList from "../movie-list/movie-list";

const MovieCatalog = (props) => {
  const {genresList, films, activeGenre, showCount, onGenreClick, onShowMoreClick} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MovieGenresList genresList={genresList} activeGenre={activeGenre} onGenreClick={onGenreClick} />

      <MovieList films={films} showCount={showCount} />

      {films.length > showCount ? <ShowMoreButton onShowMoreClick={onShowMoreClick} /> : ``}
    </section>
  );
};

MovieCatalog.propTypes = {
  genresList: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  showCount: PropTypes.number.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

export default MovieCatalog;
