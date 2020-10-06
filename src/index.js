import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const film = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`
};

ReactDOM.render(
    <App
      title={film.TITLE}
      genre={film.GENRE}
      date={film.DATE}
    />,
    document.querySelector(`#root`)
);
