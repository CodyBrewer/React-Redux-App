import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  );
};

export default Routes;
