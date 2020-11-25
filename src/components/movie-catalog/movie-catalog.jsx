import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import MovieGenresList from "../movie-genres-list/movie-genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import MovieList from "../movie-list/movie-list";

const MovieCatalog = ({genresList, filteredFilms, genre, showFilmsCount, changeGenre, showMoreCards}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MovieGenresList genresList={genresList} activeGenre={genre} onGenreClick={changeGenre} />

      <MovieList films={filteredFilms} showCount={showFilmsCount} />

      {filteredFilms.length > showFilmsCount ? <ShowMoreButton onShowMoreClick={showMoreCards} /> : ``}
    </section>
  );
};

MovieCatalog.propTypes = {
  genresList: PropTypes.array.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  showFilmsCount: PropTypes.number.isRequired,
  changeGenre: PropTypes.func.isRequired,
  showMoreCards: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  filteredFilms: state.filteredFilms,
  showFilmsCount: state.showFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  showMoreCards() {
    dispatch(ActionCreator.incrementShowFilmsCount());
  },
});

export {MovieCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
