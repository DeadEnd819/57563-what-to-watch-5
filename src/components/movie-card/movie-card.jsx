import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FilmCardType} from "../../prop-types/prop-types";

const MovieCard = ({film, renderPlayer}) => {
  const {id, name, previewImage, previewVideoLink} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`} className="small-movie-card__link">
        {renderPlayer(previewVideoLink, previewImage)}
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{name}</span>
        </h3>
      </Link>
    </article>
  );
};

MovieCard.propTypes = {
  film: FilmCardType.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default MovieCard;
