import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {MovieMenu} from "./movie-menu";
import {film} from "../../testMocks";

jest.mock(`../play-button/play-button.jsx`, () => `PlayButton`);
jest.mock(`../add-my-list-button/add-my-list-button.jsx`, () => `AddMyListButton`);

const renderer = new ShallowRenderer();
const noop = ()=>{};

describe(`Render MovieMenu`, () => {
  it(`Should MovieMenu isMain render correctly`, () => {
    renderer.render(
        <MovieMenu
          film={film}
          isMain={true}
          isUserLogged={true}
          redirectAction={noop}
          loadDataFilm={noop}
          addToMyListAction={noop}
        />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieMenu render correctly`, () => {
    renderer.render(
        <MovieMenu
          film={film}
          isMain={false}
          isUserLogged={false}
          redirectAction={noop}
          loadDataFilm={noop}
          addToMyListAction={noop}
        />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });
});
