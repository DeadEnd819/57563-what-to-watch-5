import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieMenu from "../movie-menu/movie-menu";
import MovieCatalog from "../movie-catalog/movie-catalog";
import {PromoTypes} from "../../prop-types/prop-types";
import {resetFilter} from "../../store/action";
import {isUserLoggedIn} from "../../store/selectors";

const MainScreen = ({promoFilm, resetFilterAction, isUserLogged}) => {
  const {name, backgroundImage, posterImage} = promoFilm;

  resetFilterAction();

  return <Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className={`movie-card__head`}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>

          <MovieMenu film={promoFilm} isMain={true} isUserLogged={isUserLogged}/>
        </div>
      </div>
    </section>

    <div className="page-content">

      <MovieCatalog />

      <Footer />

    </div>
  </Fragment>;
};

MainScreen.propTypes = {
  promoFilm: PromoTypes.isRequired,
  resetFilterAction: PropTypes.func.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: state.DATA.promo,
  isUserLogged: isUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetFilterAction() {
    dispatch(resetFilter());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

