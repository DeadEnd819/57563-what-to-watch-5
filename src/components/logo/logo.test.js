import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";

it(`Should Logo render correctly`, () => {
  const tree = renderer
    .create(<Logo
      className={`movie-card__head`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
