import React from "react";
import {MovieOverviewType} from "../../prop-types/prop-types";
import {MIN_STARRING_COUNT, MAX_STARRING_COUNT} from "../../const";
import {getRatingQuality} from "../../utils";

const MovieOverview = ({film}) => {
  const {rating, scoresCount, description, director, starring} = film;

  const descriptionItem = () => {
    if (description) {
      return (
        <React.Fragment>
          {description.split(/\n/).map((item, i) => <p key={i + 1}>{item}</p>)}
          <p className="movie-card__director"><strong>Director: {director}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {starring.slice(MIN_STARRING_COUNT, MAX_STARRING_COUNT).join(`, `)}
            {starring.length > MAX_STARRING_COUNT ? ` and other` : ``}</strong></p>
        </React.Fragment>
      );
    }
    return null;
  };

  return (<React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingQuality(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">

      {descriptionItem()}

    </div>
  </React.Fragment>);
};

MovieOverview.propTypes = {
  film: MovieOverviewType.isRequired,
};

export default MovieOverview;
