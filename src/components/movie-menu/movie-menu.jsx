import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import {MovieMenuType} from "../../prop-types/prop-types";
import {AppRoute} from "../../const";
import PlayButton from "../play-button/play-button";
import AddMyListButton from "../add-my-list-button/add-my-list-button";
import PropTypes from "prop-types";
import {fetchCurrentFilm, fetchReviews, updateFavoriteFilm} from "../../store/api-actions";
import {redirectToRoute} from "../../store/action";
import {connect} from "react-redux";

const MovieMenu = ({isMain, film, redirectAction, isUserLogged, loadDataFilm, addToMyListAction}) => {
  const {FILMS, REVIEW} = AppRoute;
  const {id, name, genre, released, isFavorite} = film;

  const handleAddMyListButtonClick = useCallback(
      () => {
        if (!isUserLogged) {
          redirectAction();
        }

        addToMyListAction(id, !isFavorite);
        loadDataFilm(id);
      }, [film, id, isFavorite]
  );

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <PlayButton id={id} />
        <AddMyListButton isFavorite={isFavorite} onButtonClick={handleAddMyListButtonClick} />
        {!isMain && <Link to={`${FILMS}/${id}${REVIEW}`} className="btn movie-card__button">Add review</Link>}
      </div>
    </div>
  );
};

MovieMenu.defaultProps = {
  isUserLogged: false,
};

MovieMenu.propTypes = {
  isMain: PropTypes.bool,
  film: MovieMenuType.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  loadDataFilm: PropTypes.func.isRequired,
  redirectAction: PropTypes.func.isRequired,
  addToMyListAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadDataFilm(id) {
    dispatch(fetchCurrentFilm(id));
    dispatch(fetchReviews(id));
  },
  addToMyListAction(id, isFavorite) {
    dispatch(updateFavoriteFilm(id, isFavorite));
  },
  redirectAction() {
    dispatch(redirectToRoute(AppRoute.LOGIN));
  },
});

export {MovieMenu};
export default connect(null, mapDispatchToProps)(MovieMenu);


