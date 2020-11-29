import React, {useState, memo} from "react";
import PropTypes from "prop-types";
import {FilmCardType} from "../../prop-types/prop-types";
import FilmCard from "../movie-card/movie-card";

const MemoFilmCard = memo(FilmCard);

const MovieList = ({films, showCount}) => {
  const filmsShowCount = films.length > showCount ? showCount : films.length;
  const [activeId, setActiveId] = useState(-1);

  return (
    <div className="catalog__movies-list">
      {films.slice(0, filmsShowCount).map((film, i) =>
        <MemoFilmCard
          key={i + film.name}
          film={film}
          isActive={film.id === activeId}
          onMouseOver={() => setActiveId(film.id)}
          onMouseOut={() => setActiveId(-1)}/>
      )}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(FilmCardType).isRequired,
  showCount: PropTypes.number.isRequired,
};

export default MovieList;
