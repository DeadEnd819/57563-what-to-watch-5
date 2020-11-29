import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {VIDEO_TIME_OUT} from "../../const";

const VideoPlayer = ({previewImage, previewVideoLink}) => {
  const videoRef = useRef(null);

  useEffect(()=>{
    const video = videoRef.current;
    videoRef.current.oncanplaythrough = () => {
      setTimeout(() => {
        video.play();
      }, VIDEO_TIME_OUT);
    };

    return ()=>{
      videoRef.current.oncanplaythrough = null;
    };
  });

  return (
    <video width="280" height="175" muted="muted" poster={previewImage} ref = {videoRef}>
      <source src={previewVideoLink}/>
    </video>
  );
};

VideoPlayer.propTypes = {
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default VideoPlayer;
