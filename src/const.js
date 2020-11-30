export const BACKEND_URL = `https://5.react.pages.academy/wtw`;
export const REQUEST_TIMEOUT = 5000;

export const RATINGS_MOVIE_STARS = [`1`, `2`, `3`, `4`, `5`];
export const MORE_MOVIE_COUNT = 4;
export const SHOW_MOVIE_COUNT = 8;
export const MIN_STARRING_COUNT = 0;
export const MAX_STARRING_COUNT = 4;
export const VIDEO_TIME_OUT = 1000;
export const MAX_GENRES_COUNT = 9;
export const DEFAULT_MOVIE_RATING = `3`;
export const DEFAULT_REVIEW_TEXT = ``;

export const HttpCode = {
  SUCCESS: 200,
  UNAUTHORIZED: 401
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  NOT_AUTHORIZED: `NOT_AUTHORIZED`,
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_SHOW_FILMS_COUNT: `INCREMENT_SHOW_FILMS_COUNT`,
  RESET_FILMS_FILTER: `RESET_FILMS_FILTER`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_CURRENT_FILM: `CHANGE_CURRENT_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRE_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SAVE_AUTHORIZATION_INFO: `SAVE_AUTHORIZATION_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_REVIEW_STATUS: `SET_REVIEW_STATUS`,
};

export const ReviewStatus = {
  REVIEW_UPDATED: `REVIEW_UPDATED`,
  REVIEW_NOT_UPDATED: `REVIEW_NOT_UPDATED`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  REVIEW: `/review`,
  PLAYER: `/player`,
};

export const APIRoute = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
};

export const TabNames = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `Reviews`
};

export const RatingOptions = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const GenresNames = {
  ALL_GENRES: `All genres`,
};

export const MovieDetailsName = {
  DIRECTOR: `Director`,
  STARRING: `Starring`,
  RUN_TIME: `Run Time`,
  GENRE: `Genre`,
  RELEASED: `Released`,
};

export const ReviewLengths = {
  MIN: 50,
  MAX: 400,
};

export const defaultFilm = {
  id: 1,
  name: ``,
  posterImage: ``,
  previewImage: ``,
  backgroundImage: ``,
  backgroundColor: ``,
  previewVideoLink: ``,
  description: ``,
  rating: 0,
  scoresCount: 0,
  director: ``,
  starring: [``],
  runTime: 0,
  genre: ``,
  released: 0,
  isFavorite: false,
};

export const defaultReview = {
  id: 1,
  user: {
    id: 1,
    name: ``,
  },
  rating: 1,
  comment: ``,
  date: ``,
};

