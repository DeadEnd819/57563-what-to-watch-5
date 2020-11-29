import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {AppRoute} from "../../const";

const PlayButton = ({id}) => {
  const {PLAYER} = AppRoute;

  return (
    <Link to={`${PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s">
        </use>
      </svg>
      <span>Play</span>
    </Link>
  );
};

PlayButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number.isRequired, () => null]),
};

export default PlayButton;
