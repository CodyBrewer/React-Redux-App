import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import CharacterSheet from "../components/Character/CharacterSheet";
import Navigation from "../components/Navigation/Navigation";
import CharactarClasses from "../components/Classes/Classes";

import { fetchClasses, fetchRaces } from "../store/actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.firstFetch();
  }

  render() {
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
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    firstFetch: () => {
      console.log(`hi`);
      dispatch(fetchClasses());
      dispatch(fetchRaces());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
