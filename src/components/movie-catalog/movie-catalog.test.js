import React from "react";
import renderer from "react-test-renderer";
import {MovieCatalog} from "./movie-catalog";
import {genresList, film} from "../../testMocks";

jest.mock(`../movie-genres-list/movie-genres-list.jsx`, () => `MovieGenresList`);
jest.mock(`../show-more-button/show-more-button.jsx`, () => `ShowMoreButton`);
jest.mock(`../movie-list/movie-list.jsx`, () => `MovieList`);

const noop = ()=>{};

describe(`Render MovieCatalog`, () => {
  it(`Should MovieCatalog 8 films render correctly`, () => {
    const tree = renderer
      .create(
          <MovieCatalog
            genresList={genresList}
            filteredFilms={[film, film, film, film, film, film, film, film, film, film]}
            genre={`Action`}
            showFilmsCount={8}
            changeGenreAction={noop}
            showMoreCards={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieCatalog 16 films render correctly`, () => {
    const tree = renderer
      .create(
          <MovieCatalog
            genresList={genresList}
            filteredFilms={[film, film, film, film, film, film, film, film, film, film]}
            genre={`Action`}
            showFilmsCount={16}
            changeGenreAction={noop}
            showMoreCards={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
