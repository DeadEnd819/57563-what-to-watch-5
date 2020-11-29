import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";

jest.mock(`../logo/logo.jsx`, () => `Logo`);
jest.mock(`../user-block/user-block.jsx`, () => `UserBlock`);

describe(`Render Header`, () => {
  it(`Should the Header with the user block render correctly`, () => {
    const tree = renderer
      .create(
          <Header className={`movie-card__head`} showUserBlock={true}>
            <React.Fragment/>
          </Header>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <Header className={`user-page__head`} showUserBlock={false} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
