import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import MovieCard from "./movie-card";
import {film} from "../../testMocks";

jest.mock(`../video-player/video-player.jsx`, () => `VideoPlayer`);

const renderer = new ShallowRenderer();
const noop = ()=>{};

describe(`Render MovieCard`, () => {
  it(`Should MovieCard active player render correctly`, () => {
    renderer.render(
        <MovieCard film={film} isActive={true} onMouseOver={noop} onMouseOut={noop}/>
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieCard render correctly`, () => {
    renderer.render(
        <MovieCard film={film} isActive={false} onMouseOver={noop} onMouseOut={noop}/>
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });
});

