import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import browserHistory from '../../browser-history';
import {AppRoute} from "../../const";
import PropTypes from "prop-types";


const Logo = ({className}) => {
  const isMain = browserHistory.location.pathname === AppRoute.ROOT;

  const logoLetter = (
    <Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Fragment>
  );

  return (
    <div className="logo">
      {isMain ?
        <a className={`logo__link ${className}`}>{logoLetter}</a>
        : <Link to="/" className={`logo__link ${className}`}>{logoLetter}</Link>
      }
    </div>
  );
};

Logo.defaultProps = {
  className: ``,
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
