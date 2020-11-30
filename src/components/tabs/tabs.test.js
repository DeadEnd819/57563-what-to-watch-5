import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {film, reviews} from "../../testMocks";
import {TabNames} from "../../const";

jest.mock(`../movie-overview/movie-overview.jsx`, () => `MovieOverview`);
jest.mock(`../movie-details/movie-details.jsx`, () => `MovieDetails`);
jest.mock(`../movie-reviews/movie-reviews.jsx`, () => `MovieReviews`);
jest.mock(`../tabs-item/tabs-item.jsx`, () => `TabsItem`);

const noop = ()=>{};

describe(`Render Tabs`, () => {
  it(`Should Tabs details render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs
            film={film}
            reviews={reviews}
            activeTab={TabNames.DETAILS}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Tabs reviews render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs
            film={film}
            reviews={reviews}
            activeTab={TabNames.REVIEWS}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Tabs default render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs
            film={film}
            reviews={reviews}
            activeTab={`Tab default`}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
