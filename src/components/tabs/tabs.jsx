import React from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import {MovieNavigationButtons} from "../../const";
import {FilmScreenType} from "../../prop-types/prop-types";

const Tabs = (props) => {
  const {activeTab, film, reviews} = props;

  switch (activeTab) {
    case MovieNavigationButtons.DETAILS:
      return <MovieDetails film={film} />;
    case MovieNavigationButtons.REVIEWS:
      return <MovieReviews reviews={reviews} />;
    default:
      return <MovieOverview film={film} />;
  }
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  film: FilmScreenType.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default Tabs;
