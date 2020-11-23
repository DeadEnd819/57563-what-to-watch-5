import React, {PureComponent} from 'react';
import VideoPlayer from "../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlay: false,
      };

      this._handleCardOver = this._handleCardOver.bind(this);
      this._handleCardOut = this._handleCardOut.bind(this);
    }

    _handleCardOver() {
      this.setState({activePlay: true});
    }

    _handleCardOut() {
      this.setState({activePlay: false});
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={(previewVideoLink, poster) => {
          return (
            <VideoPlayer
              activePlay={this.state.activePlay}
              previewVideoLink={previewVideoLink}
              poster={poster}
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
