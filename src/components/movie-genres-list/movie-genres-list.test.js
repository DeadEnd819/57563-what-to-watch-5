import React from "react";
import renderer from "react-test-renderer";
import MovieGenresList from "./movie-genres-list";
import {genresList} from "../../testMocks";

jest.mock(`../movie-genres-item/movie-genres-item.jsx`, () => `MovieGenresItem`);

it(`Should MovieGenresList render correctly`, () => {
  const tree = renderer
    .create(
        <MovieGenresList genresList={genresList}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
