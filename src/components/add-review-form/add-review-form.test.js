import React from "react";
import renderer from "react-test-renderer";
import {AddReviewForm} from "./add-review-form";
import {ReviewStatus} from "../../const";

const noop = ()=>{};

it(`Should AddReviewForm render correctly`, () => {
  const tree = renderer
    .create(
        <AddReviewForm
          id={1}
          reviewStatus={ReviewStatus.REVIEW_NOT_UPDATED}
          updateReviewAction={noop}
          setReviewStatusAction={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
