import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FilmCardType} from "../../prop-types/prop-types";

const MovieCard = (props) => {
  const {film, renderPlayer} = props;
  const {id, name, previewImage, previewVideoLink} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      {renderPlayer(previewVideoLink, previewImage)}
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: FilmCardType.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default MovieCard;
