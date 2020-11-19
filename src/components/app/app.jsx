import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import {PromoTypes} from "../../prop-types/prop-types";

const App = (props) => {
  const {promoFilm, films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <MainScreen
            promoFilm={promoFilm}
            films={films}
            onPlayButtonClick={(id) => history.push(`/player/` + id)}
          />
        )} />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen films={films} />
        </Route>
        <Route exact path="/films/:id" render={({history}) => (
          <MovieScreen
            films={films}
            film={promoFilm}
            reviews={reviews}
            onPlayButtonClick={(id) => history.push(`/player/` + id)}
          />
        )} />
        <Route exact path="/films/:id/review">
          <AddReviewScreen film={promoFilm} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PromoTypes.isRequired,
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
