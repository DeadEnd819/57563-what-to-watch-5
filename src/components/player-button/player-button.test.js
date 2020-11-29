import React from "react";
import renderer from "react-test-renderer";
import PlayerButton from "./player-button";

const noop = ()=>{};

describe(`Render PlayerButton`, () => {
  it(`Should PlayerButton render correctly`, () => {
    const tree = renderer
      .create(
          <PlayerButton isPlaying={true} onTogglePlayButtonClick={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <PlayerButton isPlaying={false} onTogglePlayButtonClick={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
