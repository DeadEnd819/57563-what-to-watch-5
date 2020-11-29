import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {isUserLoggedIn} from "../../store/selectors";
import {redirectToRoute} from "../../store/action";
import {updateFavoriteFilm} from "../../store/api-actions";

const AddMyListButton = ({id, isFavorite, isUserLogged, onClickAction, redirectAction}) => {
  const [isFavoriteFilm, setIsFavoriteFilm] = useState(isFavorite);

  useEffect(() => {
    if (isFavorite !== isFavoriteFilm) {
      setIsFavoriteFilm((prevState) => !prevState);
    }
  }, [isFavorite]);

  const onButtonClick = () => {
    if (!isUserLogged) {
      redirectAction();
    }

    onClickAction(id, !isFavoriteFilm);
    setIsFavoriteFilm((prevState) => !prevState);
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavoriteFilm ? `#in-list` : `#add`}></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

AddMyListButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number.isRequired, () => null]),
  isFavorite: PropTypes.oneOfType([PropTypes.bool.isRequired, () => null]),
  onClickAction: PropTypes.func.isRequired,
  redirectAction: PropTypes.func.isRequired,
  isUserLogged: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isUserLogged: isUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickAction(id, isFavorite) {
    dispatch(updateFavoriteFilm(id, isFavorite));
  },
  redirectAction() {
    dispatch(redirectToRoute(AppRoute.LOGIN));
  },
});

export {AddMyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(AddMyListButton);

