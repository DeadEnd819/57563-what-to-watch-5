import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddMyListButton from "./add-my-list-button";

configure({adapter: new Adapter()});

it(`Should AddMyList button be pressed`, () => {
  const handleButtonClick = jest.fn();

  const wrapper = shallow(
      <AddMyListButton
        isFavorite={false}
        onButtonClick={handleButtonClick}
      />
  );

  const addMyListButton = wrapper.find(`button.btn`);
  addMyListButton.simulate(`click`);
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
});
