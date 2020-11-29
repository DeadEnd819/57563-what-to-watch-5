import React from "react";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";

jest.mock(`../header/header.jsx`, () => `Header`);
jest.mock(`../footer/footer.jsx`, () => `Footer`);

const noop = ()=>{};

it(`Should AuthScreen render correctly`, () => {
  const tree = renderer
    .create(
        <AuthScreen onSubmit={noop} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
