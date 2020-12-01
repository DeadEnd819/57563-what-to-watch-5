import React, {memo} from "react";
import {connect} from "react-redux";
import {changeGenre, incrementShowFilmsCount} from "../../store/action";
import PropTypes from "prop-types";
import {FilmCardType} from "../../prop-types/prop-types";
import MovieGenresList from "../movie-genres-list/movie-genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import MovieList from "../movie-list/movie-list";
import {getGenre, getGenres, getFilmsCount, getFilteredFilms} from "../../store/selectors";

const MemoMovieGenresList = memo(MovieGenresList);

const MovieCatalog = ({genresList, filteredFilms, genre, showFilmsCount, changeGenreAction, showMoreCards}) => {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    const currentGenre = evt.target.textContent;
    changeGenreAction(currentGenre);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MemoMovieGenresList genresList={genresList} activeGenre={genre} onGenreClick={handleButtonClick} />

      <MovieList films={filteredFilms} showCount={showFilmsCount} />

      {filteredFilms.length > showFilmsCount ? <ShowMoreButton onShowMoreClick={showMoreCards} /> : ``}
    </section>
  );
};

MovieCatalog.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredFilms: PropTypes.arrayOf(FilmCardType).isRequired,
  genre: PropTypes.string.isRequired,
  showFilmsCount: PropTypes.number.isRequired,
  changeGenreAction: PropTypes.func.isRequired,
  showMoreCards: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  genresList: getGenres(state),
  showFilmsCount: getFilmsCount(state),
  filteredFilms: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenreAction(genre) {
    dispatch(changeGenre(genre));
  },
  showMoreCards() {
    dispatch(incrementShowFilmsCount());
  },
});

export {MovieCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
