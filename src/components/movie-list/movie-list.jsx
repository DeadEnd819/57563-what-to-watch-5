import React from "react";
import PropTypes from "prop-types";
import {FilmCardType} from "../../prop-types/prop-types";
import FilmCard from "../movie-card/movie-card";
import withVideoPlayer from "../../hocs/with-video-player";

const FilmCardWrapped = withVideoPlayer(FilmCard);

const MovieList = ({films, showCount}) => {
  const filmsShowCount = films.length > showCount ? showCount : films.length;

  return (
    <div className="catalog__movies-list">
      {films.slice(0, filmsShowCount).map((film, i) =>
        <FilmCardWrapped key={i + film.name} film={film} />
      )}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(FilmCardType).isRequired,
  showCount: PropTypes.number.isRequired,
};

export default MovieList;
