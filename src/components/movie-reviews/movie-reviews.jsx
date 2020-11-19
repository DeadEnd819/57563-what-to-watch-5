import React from "react";
import PropTypes from "prop-types";
import {ReviewType} from "../../prop-types/prop-types";
import ReviewItem from "../review-item/review-item";
import {getEvenElements, getOddElements} from "../../utils";

const MovieReviews = (props) => {
  const {reviews} = props;

  const evenReviews = getEvenElements(reviews);
  const oddReviews = getOddElements(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {evenReviews.map((review, i) =>
          <ReviewItem key={i + 1} review={review} />
        )}
      </div>

      <div className="movie-card__reviews-col">
        {oddReviews.map((review, i) =>
          <ReviewItem key={i + 1} review={review} />
        )}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
};

export default MovieReviews;
