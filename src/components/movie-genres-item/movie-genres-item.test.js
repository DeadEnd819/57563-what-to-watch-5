import React from "react";
import renderer from "react-test-renderer";
import MovieGenresItem from "./movie-genres-item";

const noop = ()=>{};

describe(`Render PlayerButton`, () => {
  it(`Should MovieGenresItem activeGenre render correctly`, () => {
    const tree = renderer
      .create(
          <MovieGenresItem genre={`Comedy`} activeGenre={`Comedy`} onGenreClick={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieGenresItem render correctly`, () => {
    const tree = renderer
      .create(
          <MovieGenresItem genre={`Fantasy`} activeGenre={`Crime`} onGenreClick={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
