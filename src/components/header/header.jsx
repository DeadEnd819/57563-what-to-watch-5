import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

const Header = ({children, className, showUserBlock}) => {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      {showUserBlock && <UserBlock/>}
    </header>
  );
};

Header.defaultProps = {
  className: ``,
  showUserBlock: true,
};

Header.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  showUserBlock: PropTypes.bool,
};

export default Header;
