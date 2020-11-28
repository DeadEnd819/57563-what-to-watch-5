import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieMenu from "../movie-menu/movie-menu";
import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";
import withTabs from "../../hocs/with-tabs";
import {FilmCardType, FilmScreenType, ReviewType} from "../../prop-types/prop-types";
import {MORE_MOVIE_COUNT} from "../../const";
import {fetchCurrentFilm, fetchReviews} from "../../store/api-actions";
import {getSimilarFilms, getCurrentFilm, getReviews, isUserLoggedIn} from "../../store/selectors";

const TabsWrapped = withTabs(Tabs);

const MovieScreen = ({currentFilm, loadDataFilm, id, similarFilms, reviews, isUserLogged}) => {
  useEffect(() => {
    loadDataFilm(id);
  }, [id]);

  const {name, posterImage, backgroundImage, backgroundColor} = currentFilm;

  return <Fragment>
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className={`movie-card__head`}/>

        <div className="movie-card__wrap">

          <MovieMenu film={currentFilm} isUserLogged={isUserLogged} />

        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">

            <TabsWrapped film={currentFilm} reviews={reviews} />

          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MovieList films={similarFilms} showCount={MORE_MOVIE_COUNT} />

      </section>

      <Footer />
    </div>
  </Fragment>;
};

MovieScreen.propTypes = {
  id: PropTypes.string.isRequired,
  currentFilm: PropTypes.oneOfType([FilmScreenType.isRequired, () => null]),
  similarFilms: PropTypes.oneOfType([PropTypes.arrayOf(FilmCardType), () => null]),
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
  loadDataFilm: PropTypes.func.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
  currentFilm: getCurrentFilm(state),
  similarFilms: getSimilarFilms(state, props),
  reviews: getReviews(state),
  isUserLogged: isUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadDataFilm(id) {
    dispatch(fetchCurrentFilm(id));
    dispatch(fetchReviews(id));
  },
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);

