import React, {PureComponent} from "react";
import {RATINGS_MOVIE} from "../../const";

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: `3`,
      text: ``,
    };

    this._onRatingChange = this._onRatingChange.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
  }

  _onRatingChange(evt) {
    this.setState({rating: evt.target.value});
  }

  _onTextChange(evt) {
    this.setState({text: evt.target.value});
  }

  render() {
    const currentRating = this.state.rating;

    return (
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RATINGS_MOVIE.map((rating) => {

              return <React.Fragment key={rating}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} checked={rating === currentRating} onChange={this._onRatingChange}/>
                <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
              </React.Fragment>;
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this._onTextChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}

export default AddReviewForm;
