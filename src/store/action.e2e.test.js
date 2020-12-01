import {film, films, promoFilm, reviews} from "../testMocks";
import {ActionType, AuthorizationStatus, ReviewStatus, SHOW_MOVIE_COUNT} from "../const";
import {
  incrementShowFilmsCount,
  changeGenre,
  loadFilms,
  loadCurrentFilm,
  loadPromoFilm,
  loadReviews,
  requireAuthorization,
  saveAuthorizationInfo,
  redirectToRoute,
  setReviewStatus,
} from "./action";

const {NOT_AUTHORIZED} = AuthorizationStatus;
const {REVIEW_UPDATED} = ReviewStatus;

const {
  CHANGE_GENRE,
  INCREMENT_SHOW_FILMS_COUNT,
  LOAD_FILMS,
  LOAD_PROMO_FILM,
  LOAD_CURRENT_FILM,
  LOAD_REVIEWS,
  REQUIRE_AUTHORIZATION,
  SAVE_AUTHORIZATION_INFO,
  REDIRECT_TO_ROUTE,
  SET_REVIEW_STATUS,
} = ActionType;

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing films count returns correct action`, () => {
    expect(incrementShowFilmsCount()).toEqual({
      type: INCREMENT_SHOW_FILMS_COUNT,
      payload: SHOW_MOVIE_COUNT,
    });
  });

  it(`Action creator change genre returns correct action`, () => {
    expect(changeGenre(`Drama`)).toEqual({
      type: CHANGE_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator load films returns correct action`, () => {
    expect(loadFilms(films)).toEqual({
      type: LOAD_FILMS,
      payload: films,
    });
  });

  it(`Action creator load current film returns correct action`, () => {
    expect(loadCurrentFilm(film)).toEqual({
      type: LOAD_CURRENT_FILM,
      payload: film,
    });
  });

  it(`Action creator load promo film returns correct action`, () => {
    expect(loadPromoFilm(promoFilm)).toEqual({
      type: LOAD_PROMO_FILM,
      payload: promoFilm,
    });
  });

  it(`Action creator load reviews returns correct action`, () => {
    expect(loadReviews(reviews)).toEqual({
      type: LOAD_REVIEWS,
      payload: reviews,
    });
  });

  it(`Action creator require authorization returns correct action`, () => {
    expect(requireAuthorization(NOT_AUTHORIZED)).toEqual({
      type: REQUIRE_AUTHORIZATION,
      payload: NOT_AUTHORIZED,
    });
  });

  it(`Action creator save authorization info returns correct action`, () => {
    expect(saveAuthorizationInfo(
        {
          name: `Paula`,
          avatarUrl: `/user/avatar.jpg`,
        }
    )).toEqual({
      type: SAVE_AUTHORIZATION_INFO,
      payload: {
        name: `Paula`,
        avatarUrl: `/user/avatar.jpg`,
      },
    });
  });

  it(`Action creator redirect to route returns correct action`, () => {
    expect(redirectToRoute(`/`)).toEqual({
      type: REDIRECT_TO_ROUTE,
      payload: `/`,
    });
  });

  it(`Action creator set review status returns correct action`, () => {
    expect(setReviewStatus(REVIEW_UPDATED)).toEqual({
      type: SET_REVIEW_STATUS,
      payload: REVIEW_UPDATED,
    });
  });
});
