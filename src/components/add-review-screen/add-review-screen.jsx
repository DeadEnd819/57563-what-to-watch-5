import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../header/header";
import AddReviewForm from "../add-review-form/add-review-form";
import PropTypes from "prop-types";
import {FilmScreenType} from "../../prop-types/prop-types";
import {getCurrentFilm} from "../../store/selectors";
import {fetchCurrentFilm} from "../../store/api-actions";

const AddReviewScreen = ({film, loadFilm}) => {
  const {id, name, backgroundImage, posterImage} = film;

  useEffect(() => {
    loadFilm(id);
  }, [id]);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm id={id} />
      </div>

    </section>
  );
};

AddReviewScreen.propTypes = {
  id: PropTypes.string.isRequired,
  film: FilmScreenType.isRequired,
  loadFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getCurrentFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
});

export {AddReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
