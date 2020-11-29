import {extend} from "../../../utils";
import {ActionType, AuthorizationStatus, ReviewStatus} from "../../../const";

const {NOT_AUTHORIZED} = AuthorizationStatus;
const {REVIEW_NOT_UPDATED} = ReviewStatus;
const {REQUIRE_AUTHORIZATION, SET_REVIEW_STATUS, SAVE_AUTHORIZATION_INFO} = ActionType;

const initialState = {
  name: null,
  avatar: null,
  status: NOT_AUTHORIZED,
  reviewStatus: REVIEW_NOT_UPDATED,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRE_AUTHORIZATION:
      return extend(state, {
        status: action.payload,
      });
    case SET_REVIEW_STATUS:
      return extend(state, {
        reviewStatus: action.payload,
      });
    case SAVE_AUTHORIZATION_INFO:
      return extend(state, {
        name: action.payload.name,
        avatar: action.payload.avatar_url,
      });
  }

  return state;
};

export {user};
