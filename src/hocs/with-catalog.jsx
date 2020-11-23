import React, {PureComponent} from 'react';
import {GenresNames, SHOW_MOVIE_COUNT} from "../const";
import {getFilmsByGenre} from "../utils";
import PropTypes from "prop-types";

const withCatalog = (Component) => {
  class WithCatalog extends PureComponent {
    constructor(props) {
      super(props);

      this.films = props.films;

      this.state = {
        activeGenre: GenresNames.ALL_GENRES,
        showCount: SHOW_MOVIE_COUNT,
      };

      this._onGenreClick = this._onGenreClick.bind(this);
      this._onShowMoreClick = this._onShowMoreClick.bind(this);
    }

    _onGenreClick(evt) {
      evt.preventDefault();

      this.setState({activeGenre: evt.target.textContent});
      this.setState({showCount: SHOW_MOVIE_COUNT});
    }

    _onShowMoreClick(evt) {
      evt.preventDefault();

      this.setState({showCount: this.state.showCount + SHOW_MOVIE_COUNT});
    }

    render() {
      return <Component
        {...this.props}
        films={getFilmsByGenre(this.films, this.state.activeGenre)}
        activeGenre={this.state.activeGenre}
        showCount={this.state.showCount}
        onGenreClick={this._onGenreClick}
        onShowMoreClick={this._onShowMoreClick}
      />;
    }
  }

  WithCatalog.propTypes = {
    films: PropTypes.array.isRequired,
  };

  return WithCatalog;
};

export default withCatalog;
