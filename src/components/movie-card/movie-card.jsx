import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FilmCardType} from "../../prop-types/prop-types";
import VideoPlayer from '../video-player/video-player';

const MovieCard = ({film, isActive, onMouseOver, onMouseOut}) => {
  const {id, name, previewImage, previewVideoLink} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <Link to={`/films/${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {!isActive && <img src={previewImage} alt={name} width="280" height="175" />}
          {isActive && <VideoPlayer previewImage = {previewImage} previewVideoLink = {previewVideoLink} />}
        </div>
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{name}</span>
        </h3>
      </Link>
    </article>
  );
};

MovieCard.propTypes = {
  film: FilmCardType.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default MovieCard;
