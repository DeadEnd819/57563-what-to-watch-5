import React from "react";
import renderer from "react-test-renderer";
import {UserBlock} from "./user-block";

describe(`Render UserBlock`, () => {
  it(`Should UserBlock render correctly`, () => {
    const tree = renderer
      .create(
          <UserBlock isUserLogged={false} avatarUrl={`avatar.jpg`} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should UserBlock logged render correctly`, () => {
    const tree = renderer
      .create(
          <UserBlock isUserLogged={true} avatarUrl={`avatar.jpg`} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
