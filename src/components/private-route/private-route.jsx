import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../const";
import {getUserStatus} from "../../store/selectors";


const PrivateRoute = (props) => {
  const {render, path, exact, isUserAuthorized} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isUserAuthorized === AuthorizationStatus.AUTHORIZED
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isUserAuthorized: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: getUserStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
