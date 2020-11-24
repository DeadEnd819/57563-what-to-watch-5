import React from "react";
import PropTypes from "prop-types";
import {capitalizeFirstLetter} from "../../utils";

const TabsItem = ({tab, activeTab}) => {

  return (
    <li className={`movie-nav__item${activeTab === tab ? ` movie-nav__item--active` : ``}`}>
      <a href="#" className="movie-nav__link" id={tab}>{capitalizeFirstLetter(tab)}</a>
    </li>
  );
};

TabsItem.propTypes = {
  tab: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default TabsItem;
