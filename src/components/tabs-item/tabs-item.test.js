import React from "react";
import renderer from "react-test-renderer";
import TabsItem from "./tabs-item";
import {TabNames} from "../../const";

const noop = ()=>{};

describe(`Render TabsItem`, () => {
  it(`Should TabsItem active render correctly`, () => {
    const tree = renderer
      .create(
          <TabsItem tab={TabNames.DETAILS} activeTab={TabNames.DETAILS} onTabClick={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should TabsItem render correctly`, () => {
    const tree = renderer
      .create(
          <TabsItem tab={TabNames.DETAILS} activeTab={TabNames.REVIEWS} onTabClick={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
