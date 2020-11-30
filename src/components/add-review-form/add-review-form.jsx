import React, {Fragment, useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateReview} from "../../store/api-actions";
import {setReviewStatus} from "../../store/action";
import {getReviewStatus} from "../../store/selectors";
import {extend} from "../../utils";
import {
  ReviewStatus,
  ReviewLengths,
  RATINGS_MOVIE_STARS,
  DEFAULT_MOVIE_RATING,
  DEFAULT_REVIEW_TEXT
} from "../../const";


const {MIN, MAX} = ReviewLengths;
const {REVIEW_UPDATED} = ReviewStatus;

const AddReviewForm = ({id, reviewStatus, updateReviewAction, setReviewStatusAction}) => {
  const [isReviewUpdated, setStatus] = useState(false);
  const [reviewState, setReviewState] = useState({
    rating: DEFAULT_MOVIE_RATING,
    text: DEFAULT_REVIEW_TEXT,
  });

  const {rating, text} = reviewState;
  const isReviewValid = rating && (text.length >= MIN && text.length <= MAX);

  useEffect(() => {
    setStatus(reviewStatus === REVIEW_UPDATED);
  }, [reviewStatus]);

  const handleFieldChange = useCallback(
      ({name, value}) => {
        setReviewState((prevState) => (
          extend(prevState, {[name]: value})
        ));
      }, [reviewState]
  );

  const handleFormSubmit = useCallback(
      (evt) => {
        evt.preventDefault();
        setReviewStatusAction(REVIEW_UPDATED);
        updateReviewAction(id, {rating, text});
      }, [id, reviewState]
  );

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">

          {RATINGS_MOVIE_STARS.map((star, i) => (
            <Fragment key={i + star}>
              <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star}
                checked={rating === star} disabled={isReviewUpdated} onChange={(evt) => handleFieldChange(evt.target)} />
              <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
            </Fragment>
          ))}

        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="text" id="review-text" value={text}
          minLength={MIN} maxLength={MAX} placeholder="Review text"
          disabled={isReviewUpdated} onChange={(evt) => handleFieldChange(evt.target)} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isReviewValid || isReviewUpdated}>Post</button>
        </div>

      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  reviewStatus: PropTypes.string.isRequired,
  updateReviewAction: PropTypes.func.isRequired,
  setReviewStatusAction: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  reviewStatus: getReviewStatus(store),
});

const mapDispatchToProps = (dispatch) => ({
  updateReviewAction(id, data) {
    dispatch(updateReview(id, data));
  },
  setReviewStatusAction(status) {
    dispatch(setReviewStatus(status));
  },
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
