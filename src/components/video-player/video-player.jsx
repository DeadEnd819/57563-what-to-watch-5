import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_TIME_OUT = 1000;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timeout = null;

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
  }

  render() {
    const {previewVideoLink, poster, onMovieCardOver, onMovieCardOut} = this.props;

    return (
      <div className="small-movie-card__image" onMouseOver={() => onMovieCardOver()} onMouseOut={() => onMovieCardOut()}>
        <video ref={this._videoRef} autoPlay={false} poster={poster} src={previewVideoLink} width="280" height="175" muted>
        </video>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;
    if (prevProps.activePlay === this.props.activePlay) {
      return;
    }

    if (this.props.activePlay) {
      this._timeout = setTimeout(video.play(), VIDEO_TIME_OUT);
    } else {
      clearTimeout(this._timeout);
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  activePlay: PropTypes.bool.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onMovieCardOver: PropTypes.func.isRequired,
  onMovieCardOut: PropTypes.func.isRequired,
};

export default VideoPlayer;
