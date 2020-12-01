import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

configure({adapter: new Adapter()});

it(`Should ShowMore button be pressed`, () => {
  const handleShowMoreClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton onShowMoreClick={handleShowMoreClick}/>
  );

  const showMoreButton = wrapper.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);
  expect(handleShowMoreClick).toHaveBeenCalledTimes(1);
});
