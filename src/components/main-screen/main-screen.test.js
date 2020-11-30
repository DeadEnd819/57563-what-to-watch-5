import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";
import {promoFilm} from "../../testMocks";

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
      isUserLogged={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
