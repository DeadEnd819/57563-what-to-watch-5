import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import HeaderLogo from "../header-logo/header-logo";

const Header = (props) => {
  const {isMain} = props;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        {isMain ?
          <a className="logo__link">
            <HeaderLogo />
          </a>
          : <Link to="/" className="logo__link">
            <HeaderLogo />
          </Link>
        }
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMain: PropTypes.bool,
};

export default Header;
