import React, {useState, useEffect, useCallback, useRef} from "react";
import PropTypes from "prop-types";
import {FilmCardType} from "../../prop-types/prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PlayerButton from "../player-button/player-button";
import FullScreenButton from "../full-screen-button/full-screen-button";
import {fetchCurrentFilm} from "../../store/api-actions";
import {getCurrentFilm} from "../../store/selectors";
import {getVideoDuration, getToggleProgress, extend} from "../../utils";
import {AppRoute} from "../../const";

const {FILMS} = AppRoute;

const PlayerScreen = ({id, film, loadDataFilm}) => {
  const {name, backgroundImage, videoLink} = film;
  const videoRef = useRef();

  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    duration: 0,
    progress: 0,
  });

  const {isPlaying, duration, progress} = playerState;
  const timeLeft = getVideoDuration(duration - progress);
  const toggleProgress = getToggleProgress(progress, duration);

  useEffect(() => {
    loadDataFilm(id);
  }, [id]);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.oncanplay = () => {
        setPlayerState((prevState) => (
          extend(prevState, {duration: Math.floor(video.duration)})
        ));
      };

      video.ontimeupdate = () => {
        setPlayerState((prevState) => (
          extend(prevState, {progress: Math.floor(video.currentTime)})
        ));
      };

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    return () => {
      if (video) {
        video.oncanplay = null;
        video.ontimeupdate = null;
      }
    };
  }, [isPlaying]);

  const handleTogglePlayButtonClick = useCallback(
      () => {
        setPlayerState((prevState) => (
          extend(prevState, {isPlaying: !isPlaying})
        ));
      }, [isPlaying]
  );

  const handleFullScreenButtonClick = useCallback(
      () => {
        const video = videoRef.current;
        video.requestFullscreen();
      }, [videoRef]
  );

  return (
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster={backgroundImage} />

      <Link to={`${FILMS}/${id}`} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}>
            </progress>
            <div className="player__toggler" style={{left: `${toggleProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <PlayerButton isPlaying={isPlaying} onTogglePlayButtonClick={handleTogglePlayButtonClick}/>
          <div className="player__name">{name}</div>

          <FullScreenButton onFullScreenButtonClick={handleFullScreenButtonClick} />
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  id: PropTypes.string.isRequired,
  film: FilmCardType.isRequired,
  loadDataFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getCurrentFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadDataFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
});

export {PlayerScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
