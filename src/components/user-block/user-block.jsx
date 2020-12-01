import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {isUserLoggedIn, getUserAvatar} from "../../store/selectors";
import {AppRoute} from "../../const";

const UserBlock = ({isUserLogged, avatarUrl}) => {
  const {LOGIN, MY_LIST} = AppRoute;

  const getUserBlockElement = () => {
    if (!isUserLogged) {
      return (<Link className="user-block__link" to = {LOGIN}>Sign in</Link>);
    }

    return (
      <div className="user-block__avatar">
        <Link to = {MY_LIST}>
          <img src={avatarUrl} alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    );
  };

  return (
    <div className="user-block">
      {getUserBlockElement()}
    </div>
  );
};

UserBlock.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isUserLogged: isUserLoggedIn(state),
  avatarUrl: getUserAvatar(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);

