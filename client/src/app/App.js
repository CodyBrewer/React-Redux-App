import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import CharacterSheet from "../components/Character/CharacterSheet";

const App = () => {
  return (
    <>
      <Switch>
        {Routes.map(route => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
      <CharacterSheet />
    </>
  );
};

export default App;
