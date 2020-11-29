import React, {PureComponent, createRef} from 'react';
import VideoPlayer from "../components/video-player/video-player";
import {VIDEO_TIME_OUT} from "../const";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._timeout = null;

      this.state = {
        activePlay: false,
        isLoading: true,
      };

      this._handleCardOver = this._handleCardOver.bind(this);
      this._handleCardOut = this._handleCardOut.bind(this);
    }

    _handleCardOver(evt) {
      evt.preventDefault();

      this.setState({activePlay: true});
    }

    _handleCardOut() {
      this.setState({activePlay: false});
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

    componentDidUpdate(prevProps, prevState) {
      const video = this._videoRef.current;
      const {activePlay} = this.state;

      if (prevState.activePlay === activePlay) {
        return;
      }

      if (activePlay) {
        this._timeout = setTimeout(video.play(), VIDEO_TIME_OUT);
      } else {
        clearTimeout(this._timeout);
        video.load();
      }
    }

    render() {
      const {activePlay} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(previewVideoLink, previewImage) => {
          return (
            <VideoPlayer
              videoRef={this._videoRef}
              activePlay={activePlay}
              previewVideoLink={previewVideoLink}
              poster={previewImage}
              onMovieCardOver ={this._handleCardOver}
              onMovieCardOut={this._handleCardOut}
            />
          );
        }}
      />;
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
