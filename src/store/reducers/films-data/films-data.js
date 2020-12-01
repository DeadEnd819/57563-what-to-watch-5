import {extend} from "../../../utils";
import {ActionType, defaultFilm, defaultReview} from "../../../const";

const {LOAD_FILMS, LOAD_CURRENT_FILM, LOAD_PROMO_FILM, LOAD_REVIEWS} = ActionType;

const initialState = {
  films: [defaultFilm],
  promo: defaultFilm,
  currentFilm: defaultFilm,
  currentReviews: [defaultReview],
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
