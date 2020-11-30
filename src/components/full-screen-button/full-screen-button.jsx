import React from "react";
import PropTypes from "prop-types";

const FullScreenButton = ({onFullScreenButtonClick}) => {
  return (
    <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen" />
      </svg>
      <span>Full screen</span>
    </button>
  );
};

FullScreenButton.propTypes = {
  onFullScreenButtonClick: PropTypes.func.isRequired,
};

export default FullScreenButton;
