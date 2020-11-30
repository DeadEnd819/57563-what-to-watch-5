import React, {Link} from "react";
import {Switch, Route, Router} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import MovieScreen from "../movie-screen/movie-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const {ROOT, LOGIN, MY_LIST, FILMS, REVIEW, PLAYER} = AppRoute;

const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={ROOT} render={({history}) => (
          <MainScreen
            onPlayButtonClick={(id) => history.push(`${PLAYER}/${id}`)}
          />
        )} />
        <Route exact path={LOGIN}>
          <AuthScreen />
        </Route>
        <PrivateRoute
          exact path={MY_LIST}
          render = {()=>
            <MyListScreen/>}
        />
        <Route exact path={`${FILMS}/:id`} render={({match}) => (
          <MovieScreen
            id={match.params.id}
          />
        )} />
        <PrivateRoute exact path={`${FILMS}/:id${REVIEW}`}
          render={({match})=>{
            return (
              <AddReviewScreen id = {match.params.id}/>);
          }}/>
        <Route exact path={`${PLAYER}/:id`} render={({match}) => (
          <PlayerScreen
            id={match.params.id}
          />
        )} />
        <Route
          render={() => (
            <>
              <h1>404.</h1>
              <p>Page not found</p>
              <Link to={`/`}>Go to main page</Link>
            </>)}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {};

export default App;

