import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {reducer} from "./store/reducer";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={films[0]}
        films ={films}
        reviews ={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
