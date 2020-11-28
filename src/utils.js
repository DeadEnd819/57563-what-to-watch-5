import {MORE_MOVIE_COUNT, MAX_GENRES_COUNT, RatingOptions, GenresNames} from "./const";
import moment from "moment";

const {BAD, NORMAL, GOOD, VERY_GOOD, AWESOME} = RatingOptions;
export const adaptFilmToClient = (film) => {
  const adaptedFilm = Object.assign(
      {},
      film,
      {
        posterImage: film.poster_image,
        previewImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link,
        scoresCount: film.scores_count,
        runTime: film.run_time,
        isFavorite: film.is_favorite
      }
  );

  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;

  return adaptedFilm;
};

export const getRatingQuality = (rating) => {
  switch (true) {
    case (rating < 3):
      return BAD;
    case (rating >= 3 && rating < 5):
      return NORMAL;
    case (rating >= 5 && rating < 8):
      return GOOD;
    case (rating >= 8 && rating < 10):
      return VERY_GOOD;
    default:
      return AWESOME;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const getEvenElements = (elements) => {
  return elements.filter((review, i) => i % 2 === 0);
};

export const getOddElements = (elements) => {
  return elements.filter((review, i) => i % 2 !== 0);
};

export const getFilmsByGenre = (films, genre) =>
  (genre === GenresNames.ALL_GENRES) ? films.slice() : films.slice().filter((film)=>film.genre === genre);

export const getFilmById = (films, id) => {
  return films.find((film) => film.id === id);
};

export const getGenresList = (films) => {
  const uniqueGenres = Array.from(new Set(films.map((film) => film.genre))).sort().slice(0, MAX_GENRES_COUNT);
  return [GenresNames.ALL_GENRES, ...uniqueGenres];
};

export const getFavoriteFilms = (films) => {
  return films.filter((film) => film.isFavorite);
};

export const getRelatedFilms = (films, currentFilm) => {
  const similarGenreFilms = films.filter((film) => film.genre === currentFilm.genre && film !== currentFilm);

  if (similarGenreFilms.length === 0) {
    return films.slice(0, MORE_MOVIE_COUNT);
  }

  if (similarGenreFilms.length > MORE_MOVIE_COUNT) {
    return similarGenreFilms.slice(0, MORE_MOVIE_COUNT);
  }

  const otherFilms = (films.filter((film) => film.genre !== currentFilm.genre)).slice(0, MORE_MOVIE_COUNT - similarGenreFilms.length);

  return similarGenreFilms.concat(otherFilms);
};

export const getVideoDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const getToggleProgress = (progress, duration) => {
  return (progress * 100 / duration || 0);
};

export const getReviewDate = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};

export const getDateTime = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

