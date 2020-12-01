import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {UserBlock} from "./user-block";

const renderer = new ShallowRenderer();

describe(`Render UserBlock`, () => {
  it(`Should UserBlock render correctly`, () => {
    renderer.render(
        <UserBlock isUserLogged={false} avatarUrl={`avatar.jpg`} />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it(`Should UserBlock logged render correctly`, () => {
    renderer.render(
        <UserBlock isUserLogged={true} avatarUrl={`avatar.jpg`} />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });
});
