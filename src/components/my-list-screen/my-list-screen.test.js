import React from "react";
import renderer from "react-test-renderer";
import {MyListScreen} from "./my-list-screen";
import {film} from "../../testMocks";

jest.mock(`../header/header.jsx`, () => `Header`);
jest.mock(`../footer/footer.jsx`, () => `Footer`);
jest.mock(`../movie-list/movie-list.jsx`, () => `MovieList`);

it(`Should MyListScreen render correctly`, () => {
  const tree = renderer
    .create(
        <MyListScreen films={[film, film, film, film, film, film]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

