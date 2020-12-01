import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TabNames} from "../../const";
import TabsItem from "./tabs-item";

configure({adapter: new Adapter()});

it(`Should Tabs item be pressed`, () => {
  const handleTabClick = jest.fn();

  const wrapper = shallow(
      <TabsItem tab={TabNames.DETAILS} activeTab={TabNames.DETAILS} onTabClick={handleTabClick}/>
  );

  const replayButton = wrapper.find(`.movie-nav__link`);
  replayButton.simulate(`click`);
  expect(handleTabClick).toHaveBeenCalledTimes(1);
});
