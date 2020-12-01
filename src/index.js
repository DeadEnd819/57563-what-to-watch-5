import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {fetchFilmsList, fetchPromoFilm, checkAuthorization} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
// import {adapter} from "./store/middlewares/adapter";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NOT_AUTHORIZED))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        // applyMiddleware(adapter),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchFilmsList()),
  store.dispatch(fetchPromoFilm()),
  store.dispatch(checkAuthorization()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
