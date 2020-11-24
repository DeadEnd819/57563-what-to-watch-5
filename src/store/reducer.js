import {GenresNames, ActionType, SHOW_MOVIE_COUNT} from "../const";
import {extend, getFilmsByGenre} from "../utils";
import films from "../mocks/films";
import reviews from "../mocks/reviews";

const {
  CHANGE_GENRE,
  INCREMENT_SHOW_FILMS_COUNT,
} = ActionType;

const initialState = {
  genre: GenresNames.ALL_GENRES,
  films,
  reviews,
  promoFilm: films[0],
  filteredFilms: films,
  showFilmsCount: SHOW_MOVIE_COUNT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
        filteredFilms: getFilmsByGenre(state.films, action.payload),
        showFilmsCount: SHOW_MOVIE_COUNT,
      });

    case INCREMENT_SHOW_FILMS_COUNT:
      return extend(state, {
        showFilmsCount: state.showFilmsCount + action.payload,
      });
  }

  return state;
};

export {reducer};
