import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../header/header";
import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";
import withTabs from "../../hocs/with-tabs";
import {FilmScreenType} from "../../prop-types/prop-types";
import {MORE_MOVIE_COUNT} from "../../const";
import {getFilmsByGenre} from "../../utils";

const TabsWrapped = withTabs(Tabs);

const MovieScreen = (props) => {
  const {films, film, reviews, onPlayButtonClick} = props;
  const {id, name, posterImage, backgroundImage, genre, released} = film;
  const similarFilm = getFilmsByGenre(films, genre);

  return <Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(id)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">

            <TabsWrapped film={film} reviews={reviews} />

          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieList films={similarFilm} showCount={MORE_MOVIE_COUNT} />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to='/' className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>;
};

MovieScreen.propTypes = {
  film: FilmScreenType.isRequired,
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default MovieScreen;
