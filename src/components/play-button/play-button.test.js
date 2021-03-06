import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import PlayButton from "./play-button";

const renderer = new ShallowRenderer();

it(`Should PlayButton render correctly`, () => {
  renderer.render(
      <PlayButton id={1}/>
  );

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
