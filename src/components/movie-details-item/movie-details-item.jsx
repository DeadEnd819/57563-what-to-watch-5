import React from "react";
import PropTypes from "prop-types";

const MovieDetailsItem = ({name, value}) => {

  return (
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">{name}</strong>
      <span className="movie-card__details-value">{value}</span>
    </p>
  );
};

MovieDetailsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default MovieDetailsItem;
