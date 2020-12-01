import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";
import {reviews} from "../../testMocks";

jest.mock(`../header/header.jsx`, () => `Header`);

it(`Should MovieReviews render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReviews reviews={reviews} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
