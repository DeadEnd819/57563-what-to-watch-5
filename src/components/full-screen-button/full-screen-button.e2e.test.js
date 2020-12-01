import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FullScreenButton from "./full-screen-button";

configure({adapter: new Adapter()});

it(`Should FullScreen button be pressed`, () => {
  const handleFullScreenButtonClick = jest.fn();

  const wrapper = shallow(
      <FullScreenButton onFullScreenButtonClick={handleFullScreenButtonClick} />
  );

  const fullScreenButton = wrapper.find(`button.player__full-screen`);
  fullScreenButton.simulate(`click`);
  expect(handleFullScreenButtonClick).toHaveBeenCalledTimes(1);
});
