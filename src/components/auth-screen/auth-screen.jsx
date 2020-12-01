import React, {useRef, useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import {login} from "../../store/api-actions";

const AuthScreen = ({onSubmit}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = useCallback(
      (evt) => {
        evt.preventDefault();
        onSubmit({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
      }, [emailRef, passwordRef]
  );

  return (
    <div className="user-page">
      <Header className={`user-page__head`} showUserBlock={false}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content" onSubmit={handleFormSubmit}>
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" required/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

AuthScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(null, mapDispatchToProps)(AuthScreen);
