import {createSelector} from "reselect";
import {getFilmsByGenre, getGenresList, getRelatedFilms, getFavoriteFilms, getFilmById} from "../utils";
import {AuthorizationStatus} from "../const";

export const getFilms = (state) => {
  return state.DATA.films;
};

export const getCurrentFilm = (state) => {
  return state.DATA.currentFilm;
};

export const getFilmsCount = (state) => {
  return state.FILTER.showFilmsCount;
};

export const getReviews = (state) => {
  return state.DATA.currentReviews;
};

export const getGenre = (state) => {
  return state.FILTER.genre;
};

export const getUserStatus = (state) => {
  return state.USER.status;
};

export const getUserAvatar = (state) => {
  return state.USER.avatar;
};

export const getReviewStatus = (state) => {
  return state.USER.reviewStatus;
};

export const getCurrentFilmID = (_, props) => {
  return Number(props.id);
};

export const isUserLoggedIn = (state) =>
  getUserStatus(state) === AuthorizationStatus.AUTHORIZED;

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,
    (films, genre) => {
      return getFilmsByGenre(films, genre);
    }
);

export const getSimilarFilms = createSelector(
    getFilms,
    getCurrentFilmID,
    (films, id) => {
      const currentFilm = getFilmById(films, id);
      return getRelatedFilms(films, currentFilm);
    }
);

export const getMyFilmsList = createSelector(
    getFilms,
    (films) => {
      return getFavoriteFilms(films);
    }
);

export const getGenres = createSelector(
    getFilms,
    (films) => {
      return getGenresList(films);
    }
);
