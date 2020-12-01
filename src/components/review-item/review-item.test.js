import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";
import {reviewOne} from "../../testMocks";

it(`Should ReviewItem render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem review={reviewOne}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

