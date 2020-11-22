import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import {MovieNavigationButtons} from "../../const";
import {FilmScreenType} from "../../prop-types/prop-types";
import {capitalizeFirstLetter} from "../../utils";

const Tabs = (props) => {
  const {film, reviews, activeTab, onNavigationButtonClick} = props;

  const getTabComponent = () => {
    switch (activeTab) {
      case MovieNavigationButtons.DETAILS:
        return <MovieDetails film={film} />;
      case MovieNavigationButtons.REVIEWS:
        return <MovieReviews reviews={reviews} />;
      default:
        return <MovieOverview film={film} />;
    }
  };

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list" onClick={onNavigationButtonClick}>
          {Object.values(MovieNavigationButtons).map((button, i) =>
            <li className={`movie-nav__item${activeTab === button ? ` movie-nav__item--active` : ``}`} key={`${i}-${button}`}>
              <a href="#" className="movie-nav__link" id={button}>{capitalizeFirstLetter(button)}</a>
            </li>
          )}
        </ul>
      </nav>

      {getTabComponent()}
    </Fragment>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  film: FilmScreenType.isRequired,
  reviews: PropTypes.array.isRequired,
  onNavigationButtonClick: PropTypes.func.isRequired,
};

export default Tabs;
