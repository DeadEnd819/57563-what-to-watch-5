import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";

const promoFilm = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#000000`,
  genre: `Drama`,
  released: 2014,
  isFavorite: false,
};

jest.mock(`../header/header.jsx`, () => `Header`);
jest.mock(`../footer/footer.jsx`, () => `Footer`);
jest.mock(`../movie-menu/movie-menu.jsx`, () => `MovieMenu`);
jest.mock(`../movie-catalog/movie-catalog.jsx`, () => `MovieCatalog`);

const noop = ()=>{};

it(`Should MainScreen render correctly`, () => {
  const tree = renderer
    .create(<MainScreen
      promoFilm={promoFilm}
      resetFilterAction={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
