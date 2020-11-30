import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {PrivateRoute} from "./private-route";

const renderer = new ShallowRenderer();
const noop = ()=>{};

it(`Should PrivateRoute render correctly`, () => {
  renderer.render(
      <PrivateRoute
        isUserAuthorized={`AUTHORIZED`}
        exact = {true}
        path = {`/`}
        render = {noop}
      />);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
