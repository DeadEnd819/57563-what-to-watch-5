import React, {Fragment} from "react";
import {FilmScreenType} from "../../prop-types/prop-types";
import moment from "moment";
import 'moment-duration-format';
import MovieDetailsItem from "../movie-details-item/movie-details-item";
import {MovieDetailsName} from "../../const";

const MovieDetails = ({film}) => {
  const {director, starring, runTime, genre, released} = film;
  const {DIRECTOR, STARRING, RUN_TIME, GENRE, RELEASED} = MovieDetailsName;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <MovieDetailsItem name={DIRECTOR} value={director} />
        <MovieDetailsItem
          name={STARRING}
          value={
            <Fragment>
              {starring.map((item, i) =>
                <Fragment key={i + 1}>{`${item},`} <br/></Fragment>
              )}
            </Fragment>
          }
        />
      </div>

      <div className="movie-card__text-col">
        <MovieDetailsItem
          name={RUN_TIME}
          value={
            moment.duration(runTime, `minutes`).format(`h[h] m[m]`)
          }
        />
        <MovieDetailsItem name={GENRE} value={genre} />
        <MovieDetailsItem name={RELEASED} value={released} />
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  film: FilmScreenType.isRequired,
};

export default MovieDetails;
