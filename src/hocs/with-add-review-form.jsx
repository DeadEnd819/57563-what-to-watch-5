import React, {PureComponent} from 'react';

const withAddReviewForm = (Component) => {
  class WithAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `3`,
        text: ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({rating: evt.target.value});
    }

    _handleTextChange(evt) {
      this.setState({text: evt.target.value});
    }

    render() {
      const {rating} = this.state;

      return <Component {...this.props} currentRating={rating} onRatingChange={this._handleRatingChange} onTextChange={this._handleTextChange} />;
    }
  }

  WithAddReviewForm.propTypes = {};

  return WithAddReviewForm;
};

export default withAddReviewForm;
