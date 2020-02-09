import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import CharacterSheet from "../components/Character/CharacterSheet";
import Navigation from "../components/Navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        {Routes.map(route => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default App;
