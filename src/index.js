import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

// const promo = {
//   TITLE: `The Grand Budapest Hotel`,
//   GENRE: `Drama`,
//   DATE: `2014`
// };

ReactDOM.render(
    <App
      promoFilm={films[0]}
      films ={films}
      reviews ={reviews}
    />,
    document.querySelector(`#root`)
);
