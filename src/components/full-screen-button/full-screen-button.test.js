import React from "react";
import renderer from "react-test-renderer";
import FullScreenButton from "./full-screen-button";

const noop = ()=>{};

it(`Should FullScreenButton render correctly`, () => {
  const tree = renderer
    .create(
        <FullScreenButton onFullScreenButtonClick={noop} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
