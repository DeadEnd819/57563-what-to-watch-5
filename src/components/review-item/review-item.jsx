import React, {Fragment} from "react";
import {getReviewDate, getDateTime} from "../../utils";
import {ReviewType} from "../../prop-types/prop-types";

const ReviewItem = ({review}) => {
  const {user, rating, comment, date} = review;

  return <Fragment key={review.id}>
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={getDateTime(date)}>
            {getReviewDate(date)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  </Fragment>;
};

ReviewItem.propTypes = {
  review: ReviewType.isRequired
};

export default ReviewItem;
