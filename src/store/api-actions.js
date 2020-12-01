import {APIRoute, AppRoute, HttpCode, AuthorizationStatus, ReviewStatus} from "../const";
import {adaptFilmToClient} from "../utils";
import {
  loadFilms,
  loadCurrentFilm,
  loadPromoFilm,
  loadReviews,
  requireAuthorization,
  saveAuthorizationInfo,
  redirectToRoute,
  setReviewStatus
} from "./action";

const {FILMS, PROMO, COMMENTS, LOGIN, FAVORITE} = APIRoute;
const {ROOT} = AppRoute;
const {SUCCESS, UNAUTHORIZED} = HttpCode;
const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;
const {REVIEW_NOT_UPDATED} = ReviewStatus;

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
    .catch(() => {
      throw Error(`Ошибка загрузки списка фильмов`);
    })
);

export const fetchCurrentFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${FILMS}/${id}`)
    .then(({data}) => dispatch(loadCurrentFilm(adaptFilmToClient(data))))
    .catch((error) => {
      throw error;
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(PROMO)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
    .catch(() => {
      throw Error(`Ошибка загрузки промо-фильма`);
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch(() => {
      throw Error(`Ошибка загрузки комментариев`);
    })
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(LOGIN)
    .then((data) => {
      if (data.status === SUCCESS) {
        dispatch(requireAuthorization(AUTHORIZED));
        dispatch(saveAuthorizationInfo(data.data));
      } else if (data.response.status === UNAUTHORIZED) {
        dispatch(requireAuthorization(NOT_AUTHORIZED));
      }
    })
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(LOGIN, {email, password})
    .then((data) => dispatch(saveAuthorizationInfo(data.data)))
    .then(() => dispatch(requireAuthorization(AUTHORIZED)))
    .then(() => dispatch(redirectToRoute(ROOT)))
);

export const updateReview = (id, {rating, text}) => (dispatch, _getState, api) => (
  api.post(`${COMMENTS}/${id}`, {rating: Number(rating), comment: text})
    .then(() => dispatch(setReviewStatus(REVIEW_NOT_UPDATED)))
    .then(() => dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`)))
    .catch((error) => {
      dispatch(setReviewStatus(REVIEW_NOT_UPDATED));
      throw error;
    })
);

export const updateFavoriteFilm = (id, status) => (dispatch, _getState, api) => (
  api.post(`${FAVORITE}/${id}/${+status}`)
    .then((data) => {
      if (data.response && data.response.status === UNAUTHORIZED) {
        Error(`error addToFavorites`);
      }
    })
    .then(() => dispatch(fetchCurrentFilm(id)))
    .then(() => dispatch(fetchPromoFilm()))
    .catch((error) => {
      throw error;
    })
);

