import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import TabsItem from "../tabs-item/tabs-item";
import {TabNames} from "../../const";
import {FilmScreenType, ReviewType} from "../../prop-types/prop-types";

const Tabs = ({film, reviews, activeTab, onTabClick}) => {
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
            <TabsItem key={`${i}-${tab}`} tab={tab} activeTab={activeTab} />
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
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
