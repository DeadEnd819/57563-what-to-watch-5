import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../movie-card/movie-card";
import withVideoPlayer from "../../hocs/with-video-player";

const FilmCardWrapped = withVideoPlayer(FilmCard);

const MovieList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCardWrapped key={film.id} film={film} />
      )}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
