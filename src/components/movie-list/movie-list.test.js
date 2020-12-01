import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import {film} from "../../testMocks";

jest.mock(`../movie-card/movie-card.jsx`, () => `FilmCard`);

it(`Should MovieList render correctly`, () => {
  const tree = renderer
    .create(
        <MovieList
          films={[film, film, film, film, film, film, film]}
          showCount={5}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

