import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";
import {film} from "../../testMocks";

it(`Should MovieOverview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieOverview film={film}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
