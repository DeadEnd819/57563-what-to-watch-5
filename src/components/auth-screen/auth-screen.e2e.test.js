import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AuthScreen} from "./auth-screen";

configure({adapter: new Adapter()});

it(`Should Sign in button be pressed`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = mount(
      <AuthScreen onSubmit={handleFormSubmit} />
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`);

  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
});
