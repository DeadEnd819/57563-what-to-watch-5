import {SHOW_MOVIE_COUNT, ActionType} from "../const";

const {
  CHANGE_GENRE,
  INCREMENT_SHOW_FILMS_COUNT,
  RESET_FILMS_FILTER,
  LOAD_FILMS,
  LOAD_CURRENT_FILM,
  LOAD_PROMO_FILM,
  LOAD_REVIEWS,
  REQUIRE_AUTHORIZATION,
  SAVE_AUTHORIZATION_INFO,
  REDIRECT_TO_ROUTE,
  SET_REVIEW_STATUS
} = ActionType;

export const changeGenre = (genre) => ({
  type: CHANGE_GENRE,
  payload: genre,
});

export const incrementShowFilmsCount = () => ({
  type: INCREMENT_SHOW_FILMS_COUNT,
  payload: SHOW_MOVIE_COUNT,
});

export const loadFilms = (data) => ({
  type: LOAD_FILMS,
  payload: data,
});

export const loadCurrentFilm = (data) => ({
  type: LOAD_CURRENT_FILM,
  payload: data,
});

export const loadPromoFilm = (data) => ({
  type: LOAD_PROMO_FILM,
  payload: data,
});

export const loadReviews = (data) => ({
  type: LOAD_REVIEWS,
  payload: data,
});

export const requireAuthorization = (status) => ({
  type: REQUIRE_AUTHORIZATION,
  payload: status,
});

export const saveAuthorizationInfo = (data) => ({
  type: SAVE_AUTHORIZATION_INFO,
  payload: data,
});

export const redirectToRoute = (url) => ({
  type: REDIRECT_TO_ROUTE,
  payload: url,
});

export const setReviewStatus = (status) => ({
  type: SET_REVIEW_STATUS,
  payload: status,
});
