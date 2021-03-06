import React, {Fragment, useState, useCallback} from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import TabsItem from "../tabs-item/tabs-item";
import {TabNames} from "../../const";
import {FilmScreenType, ReviewType} from "../../prop-types/prop-types";

const Tabs = ({film, reviews}) => {
  const [activeTab, setActiveTab] = useState(TabNames.OVERVIEW);

  const handleTabClick = useCallback(
      (evt) => {
        evt.preventDefault();

        if (!evt.target.id) {
          return;
        }

        setActiveTab(evt.target.id);
      }, []
  );

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
        <ul className="movie-nav__list" >
          {Object.values(TabNames).map((tab, i) =>
            <TabsItem key={`${i}-${tab}`} tab={tab} activeTab={activeTab} onTabClick={handleTabClick} />
          )}
        </ul>
      </nav>

      {getTabComponent()}
    </Fragment>
  );
};

Tabs.propTypes = {
  film: FilmScreenType.isRequired,
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
};

export default Tabs;
