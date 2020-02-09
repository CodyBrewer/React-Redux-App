import React from "react";
import { useHistory } from "react-router-dom";

const Home = props => {
  const history = useHistory();

  const changeRoute = () => {
    history.push(`/createCharacter`);
  };

  return (
    <div>
      <p className="text-red-900">Welcome Home!</p>
      <button
        onClick={e => {
          e.preventDefault();
          changeRoute();
        }}
      >
        Create New Character
      </button>
    </div>
  );
};

export default Home;
