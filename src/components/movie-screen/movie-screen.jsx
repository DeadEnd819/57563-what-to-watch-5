import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";
import {FilmScreenType} from "../../prop-types/prop-types";
import {capitalizeFirstLetter} from "../../utils";
import {MORE_MOVIE_COUNT, MovieNavigationButtons} from "../../const";

class MovieScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeNavigationButton: MovieNavigationButtons.OVERVIEW
    };

    this._onNavigationButtonClick = this._onNavigationButtonClick.bind(this);
  }

  _onNavigationButtonClick(evt) {
    evt.preventDefault();

    if (!evt.target.id) {
      return;
    }

    this.setState({activeNavigationButton: evt.target.id});
  }

  render() {
    const {films, film, reviews, onPlayButtonClick} = this.props;
    const {id, name, posterImage, backgroundImage, genre, released} = film;
    const MORE_MOVIE = films.slice(0, MORE_MOVIE_COUNT);

    return <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to='/' className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

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
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list" onClick={this._onNavigationButtonClick}>
                  {Object.values(MovieNavigationButtons).map((button, i) =>
                    <li className={`movie-nav__item${this.state.activeNavigationButton === button ? ` movie-nav__item--active` : ``}`} key={`${i}-${button}`}>
                      <a href="#" className="movie-nav__link" id={button}>{capitalizeFirstLetter(button)}</a>
                    </li>
                  )}
                </ul>
              </nav>

              <Tabs activeTab={this.state.activeNavigationButton} film={film} reviews={reviews} />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList films={MORE_MOVIE} />

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
  }
}

MovieScreen.propTypes = {
  film: FilmScreenType.isRequired,
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default MovieScreen;