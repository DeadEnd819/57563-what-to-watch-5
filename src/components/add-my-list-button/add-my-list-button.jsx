import React from "react";
import PropTypes from "prop-types";

const AddMyListButton = ({isFavorite, onButtonClick}) => {
  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}>
        </use>
      </svg>
      <span>My list</span>
    </button>
  );
};

AddMyListButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default AddMyListButton;

