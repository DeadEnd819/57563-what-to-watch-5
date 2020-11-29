import React, {Fragment} from "react";
import PropTypes from "prop-types";

const PlayerButton = ({isPlaying, onTogglePlayButtonClick}) => {
  return (
    <button type="button" className="player__play" onClick={onTogglePlayButtonClick}>
      {isPlaying ?
        <Fragment>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause" />
          </svg>
          <span>Pause</span>
        </Fragment>
        :
        <Fragment>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </Fragment>
      }
    </button>
  );
};

PlayerButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onTogglePlayButtonClick: PropTypes.func.isRequired,
};

export default PlayerButton;
