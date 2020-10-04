import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const FilmInfo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`
};

ReactDOM.render(
    <App
      title={FilmInfo.TITLE}
      genre={FilmInfo.GENRE}
      date={FilmInfo.DATE}
    />,
    document.querySelector(`#root`)
);
