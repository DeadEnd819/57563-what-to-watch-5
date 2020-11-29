import {extend} from "../../../utils";
import {GenresNames, ActionType, SHOW_MOVIE_COUNT} from "../../../const";

const {
  CHANGE_GENRE,
  INCREMENT_SHOW_FILMS_COUNT,
  RESET_FILMS_FILTER,
} = ActionType;

const initialState = {
  genre: GenresNames.ALL_GENRES,
  showFilmsCount: SHOW_MOVIE_COUNT,
};

const filmsFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
        showFilmsCount: SHOW_MOVIE_COUNT,
      });
    case INCREMENT_SHOW_FILMS_COUNT:
      return extend(state, {
        showFilmsCount: state.showFilmsCount + action.payload,
      });
    case RESET_FILMS_FILTER:
      return extend(state, {
        genre: GenresNames.ALL_GENRES,
        showFilmsCount: SHOW_MOVIE_COUNT,
      });
  }

  return state;
};

export {filmsFilter};
