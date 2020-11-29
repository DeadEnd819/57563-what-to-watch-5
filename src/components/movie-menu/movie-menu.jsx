import React from "react";
import {Link} from "react-router-dom";
import {MovieMenuType} from "../../prop-types/prop-types";
import {AppRoute} from "../../const";
import PlayButton from "../play-button/play-button";
import AddMyListButton from "../add-my-list-button/add-my-list-button";
import PropTypes from "prop-types";


const MovieMenu = ({film, isUserLogged}) => {
  const {FILMS, REVIEW} = AppRoute;
  const {id, name, genre, released, isFavorite} = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <PlayButton id={id} />
        <AddMyListButton id={id} isFavorite={isFavorite} />
        {isUserLogged && <Link to={`${FILMS}/${id}${REVIEW}`} className="btn movie-card__button">Add review</Link>}
      </div>
    </div>
  );
};

MovieMenu.defaultProps = {
  isUserLogged: false,
};

MovieMenu.propTypes = {
  film: PropTypes.oneOfType([MovieMenuType.isRequired, () => null]),
  isUserLogged: PropTypes.bool.isRequired,
};

export default MovieMenu;
