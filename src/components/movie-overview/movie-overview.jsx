import React from "react";
import PropTypes from "prop-types";
import {MIN_STARRING_COUNT, MAX_STARRING_COUNT} from "../../const";
import {getRatingQuality} from "../../utils";

const MovieOverview = (props) => {
  const {film} = props;

  return (<React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingQuality(film.rating)}</span>
        <span className="movie-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">

      {film.description.split(/\n/).map((item, i) => <p key={i + 1}>{item}</p>)}
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {film.starring.slice(MIN_STARRING_COUNT, MAX_STARRING_COUNT).join(`, `)}
        {film.starring.length > MAX_STARRING_COUNT ? ` and other` : ``}</strong></p>

    </div>
  </React.Fragment>);
};

MovieOverview.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    videoLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieOverview;
