import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {film} from "../../testMocks";

const noop = ()=>{};

configure({adapter: new Adapter()});

it(`Mouse hover on card should call callback`, () => {
  const handleMouseOver = jest.fn();

  const wrapper = shallow(
      <MovieCard film={film} isActive={true} onMouseOver={handleMouseOver} onMouseOut={noop}/>
  );

  const card = wrapper.find(`.small-movie-card`);
  card.simulate(`mouseOver`);

  expect(handleMouseOver).toHaveBeenCalledTimes(1);
});

it(`Mouse away from card should call callback`, () => {
  const handleMouseOut = jest.fn();

  const wrapper = shallow(
      <MovieCard film={film} isActive={true} onMouseOver={noop} onMouseOut={handleMouseOut}/>
  );

  const card = wrapper.find(`.small-movie-card`);
  card.simulate(`mouseOut`);

  expect(handleMouseOut).toHaveBeenCalledTimes(1);
});
