import {SHOW_MOVIE_COUNT, ActionType} from "../const";

const {CHANGE_GENRE, INCREMENT_SHOW_FILMS_COUNT} = ActionType;

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: CHANGE_GENRE,
    payload: genre,
  }),
  incrementShowFilmsCount: () => ({
    type: INCREMENT_SHOW_FILMS_COUNT,
    payload: SHOW_MOVIE_COUNT,
  }),
};
