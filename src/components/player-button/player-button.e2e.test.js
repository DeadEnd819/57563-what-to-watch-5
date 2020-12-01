import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayerButton from "./player-button";

configure({adapter: new Adapter()});

it(`Should TogglePlay button be pressed`, () => {
  const handleTogglePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <PlayerButton isPlaying={true} onTogglePlayButtonClick={handleTogglePlayButtonClick}/>
  );

  const replayButton = wrapper.find(`button.player__play`);
  replayButton.simulate(`click`);
  expect(handleTogglePlayButtonClick).toHaveBeenCalledTimes(1);
});
