import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import {TabNames} from "../../const";
import {FilmScreenType} from "../../prop-types/prop-types";
import {capitalizeFirstLetter} from "../../utils";

const Tabs = (props) => {
  const {film, reviews, activeTab, onTabClick} = props;

  const getTabComponent = () => {
    switch (activeTab) {
      case TabNames.DETAILS:
        return <MovieDetails film={film} />;
      case TabNames.REVIEWS:
        return <MovieReviews reviews={reviews} />;
      default:
        return <MovieOverview film={film} />;
    }
  };

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list" onClick={onTabClick}>
          {Object.values(TabNames).map((tab, i) =>
            <li className={`movie-nav__item${activeTab === tab ? ` movie-nav__item--active` : ``}`} key={`${i}-${tab}`}>
              <a href="#" className="movie-nav__link" id={tab}>{capitalizeFirstLetter(tab)}</a>
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
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
