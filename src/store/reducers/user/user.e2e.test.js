import {user} from "./user";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {checkAuthorization, login, updateReview} from "../../api-actions";
import {APIRoute, AppRoute} from "../../../const";
import {extend} from "../../../utils";
import {ActionType, AuthorizationStatus, ReviewStatus} from "../../../const";
import {reviews} from "../../../testMocks";

const {ROOT} = AppRoute;
const {LOGIN, COMMENTS} = APIRoute;
const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;
const {REVIEW_UPDATED, REVIEW_NOT_UPDATED} = ReviewStatus;
const {REQUIRE_AUTHORIZATION, SET_REVIEW_STATUS, SAVE_AUTHORIZATION_INFO, REDIRECT_TO_ROUTE} = ActionType;

const api = createAPI(()=>{});

const mockInitialState = {
  name: null,
  avatar: null,
  status: NOT_AUTHORIZED,
  reviewStatus: REVIEW_NOT_UPDATED,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should update status to "authorized"`, () => {
  expect(user(mockInitialState, {
    type: REQUIRE_AUTHORIZATION,
    payload: AUTHORIZED
  })).toEqual(extend(mockInitialState, {
    status: AUTHORIZED,
  })
  );
});

it(`Reducer should update review status to "saving"`, () => {
  expect(user(mockInitialState, {
    type: SET_REVIEW_STATUS,
    payload: REVIEW_UPDATED
  })).toEqual(extend(mockInitialState, {
    reviewStatus: REVIEW_UPDATED,
  })
  );
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API get request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authorizationChecker = checkAuthorization();

    apiMock
      .onGet(LOGIN)
      .reply(200, {fake: true});

    return authorizationChecker(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRE_AUTHORIZATION,
          payload: AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: SAVE_AUTHORIZATION_INFO,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API post request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@mail.ru`, password: `qwerty`};
    const loginSender = login(fakeUser);

    apiMock
      .onPost(LOGIN)
      .reply(200, {fake: true});

    return loginSender(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: SAVE_AUTHORIZATION_INFO,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REQUIRE_AUTHORIZATION,
          payload: AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: REDIRECT_TO_ROUTE,
          payload: ROOT,
        });

      });
  });

  it(`Should make a correct API post request to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReview = {rating: reviews[0].rating, text: reviews[0].comment};
    const reviewSender = updateReview(1, fakeReview);

    apiMock
      .onPost(`${COMMENTS}/${1}`)
      .reply(200, {fake: true});

    return reviewSender(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: SET_REVIEW_STATUS,
          payload: REVIEW_NOT_UPDATED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REDIRECT_TO_ROUTE,
          payload: `${AppRoute.FILMS}/${1}`,
        });
      });
  });
});
