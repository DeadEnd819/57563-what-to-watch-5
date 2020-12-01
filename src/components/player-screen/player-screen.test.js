import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {PlayerScreen} from "./player-screen";
import {film} from "../../testMocks";

jest.mock(`../player-button/player-button.jsx`, () => `PlayerButton`);
jest.mock(`../full-screen-button/full-screen-button.jsx`, () => `FullScreenButton`);

const renderer = new ShallowRenderer();
const noop = ()=>{};

it(`Should PlayerScreen render correctly`, () => {
  renderer.render(
      <PlayerScreen
        id = {`1`}
        film={film}
        loadDataFilm = {noop}
      />
  );

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
