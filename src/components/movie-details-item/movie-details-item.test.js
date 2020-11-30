import React from "react";
import renderer from "react-test-renderer";
import MovieDetailsItem from "./movie-details-item";

it(`Should MovieDetailsItem render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDetailsItem
          name={`Kate Muir`}
          value={`The mannered, madcap proceedings are often delightful`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


