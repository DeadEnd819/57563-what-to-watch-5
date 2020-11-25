import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({videoRef, previewVideoLink, poster, onMovieCardOver, onMovieCardOut}) => {

  return (
    <div className="small-movie-card__image" onMouseOver={onMovieCardOver} onMouseOut={onMovieCardOut}>
      <video ref={videoRef} autoPlay={false} poster={poster} src={previewVideoLink} width="280" height="175" muted>
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoRef: PropTypes.object.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMovieCardOver: PropTypes.func.isRequired,
  onMovieCardOut: PropTypes.func.isRequired,
};

export default VideoPlayer;
