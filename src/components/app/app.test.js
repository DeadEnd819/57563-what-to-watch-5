import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from 'redux-mock-store';
import App from "./app";
import {state} from "../../testMocks";

const mockStore = configureMockStore()(state);

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
