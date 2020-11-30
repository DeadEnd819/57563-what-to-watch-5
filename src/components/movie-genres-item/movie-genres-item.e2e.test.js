import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieGenresItem from "./movie-genres-item";

configure({adapter: new Adapter()});

it(`Should genre change item be pressed`, () => {
  const handleGenreClick = jest.fn();

  const wrapper = shallow(
      <MovieGenresItem genre={`Comedy`} activeGenre={`Drama`} onGenreClick={handleGenreClick}/>
  );

  const movieGenresItem = wrapper.find(`a.catalog__genres-link`);
  movieGenresItem.simulate(`click`);
  expect(handleGenreClick).toHaveBeenCalledTimes(1);
});
