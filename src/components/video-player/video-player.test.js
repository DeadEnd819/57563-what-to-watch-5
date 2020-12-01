import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {film} from "../../testMocks";

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer previewImage={film.previewImage} previewVideoLink={film.previewVideoLink} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

