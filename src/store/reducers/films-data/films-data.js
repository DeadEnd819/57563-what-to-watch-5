import {extend} from "../../../utils";
import {ActionType} from "../../../const";

const {LOAD_FILMS, LOAD_CURRENT_FILM, LOAD_PROMO_FILM, LOAD_REVIEWS} = ActionType;

const initialState = {
  films: [],
  promo: {},
  currentFilm: {},
  currentReviews: [],
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case LOAD_PROMO_FILM:
      return extend(state, {
        promo: action.payload,
      });
    case LOAD_CURRENT_FILM:
      return extend(state, {
        currentFilm: action.payload,
      });
    case LOAD_REVIEWS:
      return extend(state, {
        currentReviews: action.payload,
      });
  }

  return state;
};

export {filmsData};
