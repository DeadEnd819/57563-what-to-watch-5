import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FilmCardType} from "../../prop-types/prop-types";

const MovieCard = (props) => {
  const {film, onMovieCardOver, onMovieCardOut} = props;
  const {id, name, previewImage} = film;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMovieCardOver(id)} onMouseLeave={() => onMovieCardOut()}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  </React.Fragment>;
};

MovieCard.propTypes = {
  film: FilmCardType.isRequired,
  onMovieCardOver: PropTypes.func.isRequired,
  onMovieCardOut: PropTypes.func.isRequired,
};

export default MovieCard;

