import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item";
import {getEvenElements, getOddElements} from "../../utils";

const MovieReviews = (props) => {
  const {reviews} = props;

  const evenReviews = getEvenElements(reviews);
  const oddReviews = getOddElements(reviews);

  return <Fragment>
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
  </Fragment>;
};

MovieReviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default MovieReviews;
