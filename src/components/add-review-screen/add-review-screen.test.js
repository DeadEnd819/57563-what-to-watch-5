import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {AddReviewScreen} from "./add-review-screen";
import {film} from "../../testMocks";

jest.mock(`../header/header.jsx`, () => `Header`);

const renderer = new ShallowRenderer();
const noop = ()=>{};

it(`Should AddReviewScreen render correctly`, () => {
  renderer.render(
      <AddReviewScreen film={film} loadFilm={noop}/>
  );

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});

