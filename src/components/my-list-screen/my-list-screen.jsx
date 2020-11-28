import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";
import {getMyFilmsList} from "../../store/selectors";
import {connect} from "react-redux";
import {FilmCardType} from "../../prop-types/prop-types";


const MyListScreen = ({films}) => {
  return (
    <div className="user-page">
      <Header className={`user-page__head`}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList films={films} showCount={films.length} />

      </section>

      <Footer />

    </div>
  );
};

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(FilmCardType).isRequired,
};

const mapStateToProps = (state) => ({
  films: getMyFilmsList(state),
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);

