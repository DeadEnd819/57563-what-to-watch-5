import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {filmsData} from "./films-data";
import {ActionType} from "../../../const";
import {fetchFilmsList, fetchCurrentFilm, fetchPromoFilm, fetchReviews, updateFavoriteFilm} from "../../api-actions";
import {APIRoute} from "../../../const";
import {films, promoFilm, reviews} from "../../../testMocks";
import {extend} from "../../../utils";

const {FILMS, PROMO, COMMENTS, FAVORITE} = APIRoute;
const {LOAD_FILMS, LOAD_PROMO_FILM, LOAD_CURRENT_FILM, LOAD_REVIEWS} = ActionType;

const mockFilms = films;
const mockPromoFilm = promoFilm;
const mockCurrentReviews = reviews;

const mockInitialState = {
  films: [],
  promo: {},
  currentFilm: null,
  currentReviews: null,
};

const api = createAPI(()=>{});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsData(void 0, {})).toEqual(mockInitialState);
});

describe(`Reducer should update state`, () => {
  it(`by loaded films`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_FILMS,
      payload: mockFilms,
    })).toEqual(extend(mockInitialState, {
      films: mockFilms,
    })
    );
  });

  it(`by loaded promo film`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_PROMO_FILM,
      payload: mockPromoFilm,
    })).toEqual(extend(mockInitialState, {
      promo: mockPromoFilm,
    })
    );
  });

  it(`by loaded current film`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_CURRENT_FILM,
      payload: mockFilms,
    })).toEqual(extend(mockInitialState, {
      currentFilm: mockFilms,
    })
    );
  });

  it(`by loaded current reviews`, () => {
    expect(filmsData(mockInitialState, {
      type: LOAD_REVIEWS,
      payload: mockCurrentReviews,
    })).toEqual(extend(mockInitialState, {
      currentReviews: mockCurrentReviews,
    })
    );
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchCurrentFilm(1);

    apiMock
      .onGet(`${FILMS}/${1}`)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_CURRENT_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(PROMO)
      .reply(200, [{fake: true}]);

    return promoFilmLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_PROMO_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchReviews(1);

    apiMock
      .onGet(`${COMMENTS}/${1}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API post request to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesSender = updateFavoriteFilm(1, 1);

    apiMock
      .onPost(`${FAVORITE}/${1}/${1}`)
      .reply(200, {fake: true});

    return favoritesSender(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});
