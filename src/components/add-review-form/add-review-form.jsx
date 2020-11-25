import React from "react";
import {RATINGS_MOVIE} from "../../const";
import PropTypes from "prop-types";

const AddReviewForm = ({currentRating, onRatingChange, onTextChange}) => {

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RATINGS_MOVIE.map((rating) => {

            return <React.Fragment key={rating}>
              <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} checked={rating === currentRating} onChange={onRatingChange}/>
              <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
            </React.Fragment>;
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={onTextChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  currentRating: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default AddReviewForm;
