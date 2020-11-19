import React, {Fragment} from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ReviewItem = (props) => {
  const {review} = props;
  const {name, rating, comment, date} = review;

  return <Fragment key={review.id}>
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>
            {moment(date).format(`MMMM DD, YYYY`)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  </Fragment>;
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired
};

export default ReviewItem;
