import React from "react";
import PropTypes from "prop-types";
import {capitalizeFirstLetter} from "../../utils";

const TabsItem = ({tab, activeTab, onTabClick}) => {

  return (
    <li className={`movie-nav__item${activeTab === tab ? ` movie-nav__item--active` : ``}`}>
      <a href="#" className="movie-nav__link" id={tab} onClick={onTabClick}>{capitalizeFirstLetter(tab)}</a>
    </li>
  );
};

TabsItem.propTypes = {
  tab: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabsItem;
