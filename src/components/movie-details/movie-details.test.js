import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";
import {film} from "../../testMocks";

jest.mock(`../movie-details-item/movie-details-item.jsx`, () => `MovieDetailsItem`);

it(`Should MovieDetails render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDetails film={film} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

