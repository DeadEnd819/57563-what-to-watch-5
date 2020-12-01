import {filmsFilter} from "./films-filter";
import {ActionType, GenresNames, SHOW_MOVIE_COUNT} from "../../../const";

const {
  CHANGE_GENRE,
  INCREMENT_SHOW_FILMS_COUNT,
} = ActionType;

const mockInitialState = {
  genre: GenresNames.ALL_GENRES,
  showFilmsCount: SHOW_MOVIE_COUNT,
};

test(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsFilter(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should change genre by a given value`, () => {
  expect(filmsFilter(mockInitialState, {
    type: CHANGE_GENRE,
    payload: `Fantasy`,
  })).toEqual({
    genre: `Fantasy`,
    showFilmsCount: SHOW_MOVIE_COUNT,
  });
});

it(`Reducer should increment cards count by a given value`, () => {
  expect(filmsFilter(mockInitialState, {
    type: INCREMENT_SHOW_FILMS_COUNT,
    payload: 5,
  })).toEqual({
    genre: GenresNames.ALL_GENRES,
    showFilmsCount: 13,
  });
});
