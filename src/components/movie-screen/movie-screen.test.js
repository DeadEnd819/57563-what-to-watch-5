import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {MovieScreen} from "./movie-screen";
import {film, reviews} from "../../testMocks";

jest.mock(`../header/header.jsx`, () => `Header`);
jest.mock(`../footer/footer.jsx`, () => `Footer`);
jest.mock(`../movie-menu/movie-menu.jsx`, () => `MovieMenu`);
jest.mock(`../movie-list/movie-list.jsx`, () => `MovieList`);
jest.mock(`../tabs/tabs.jsx`, () => `Tabs`);

const renderer = new ShallowRenderer();
const noop = ()=>{};

describe(`Render MovieScreen`, () => {
  it(`Should MovieScreen isUserLogged render correctly`, () => {
    renderer.render(
        <MovieScreen
          id={`2`}
          isUserLogged={false}
          currentFilm={film}
          similarFilms={[film, film, film, film]}
          reviews={reviews}
          loadDataFilm={noop}
        />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieScreen render correctly`, () => {
    renderer.render(
        <MovieScreen
          id={`2`}
          isUserLogged={false}
          currentFilm={film}
          similarFilms={[film, film, film, film]}
          reviews={reviews}
          loadDataFilm={noop}
        />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });
});


