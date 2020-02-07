import React from "react";
import { withRouter } from "react-router-dom";

const Home = props => {
  const changeToCreate = e => {
    e.preventDefault();
    let path = "/createCharacter";
    props.history.push(path);
  };

  return (
    <div>
      <p className="text-red-900">Welcome Home!</p>
      <button onClick={changeToCreate}>Create Character</button>
    </div>
  );
};

export default withRouter(Home);
