import React from "react";
import renderer from "react-test-renderer";
import AddMyListButton from "./add-my-list-button";

const noop = ()=>{};

describe(`Render AddMyListButton`, () => {
  it(`Should AddMyListButton isFavorite render correctly`, () => {
    const tree = renderer
      .create(<AddMyListButton
        isFavorite={true}
        onButtonClick={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should AddMyListButton render correctly`, () => {
    const tree = renderer
      .create(<AddMyListButton
        isFavorite={false}
        onButtonClick={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
