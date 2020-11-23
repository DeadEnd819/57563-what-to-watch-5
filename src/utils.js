import {MAX_GENRES_COUNT, RatingOptions, GenresNames} from "./const";

const {BAD, NORMAL, GOOD, VERY_GOOD, AWESOME} = RatingOptions;

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

export const getGenresList = (films) => {
  const uniqueGenres = Array.from(new Set(films.map((film) => film.genre))).sort().slice(0, MAX_GENRES_COUNT);
  return [GenresNames.ALL_GENRES, ...uniqueGenres];
};

export const getFavoriteFilms = (films) => {
  return films.filter((film) => film.isFavorite);
};
