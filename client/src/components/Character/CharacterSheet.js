import React from "react";
import { connect } from "react-redux";

const CharacterSheet = () => {
  return (
    <div className="border-solid border-4 border-black flex justify-around">
      <div>
        <h2>Name:</h2>
      </div>
      <div>
        <h3>Age</h3>
      </div>
      <div>
        <h3>Class:</h3>
      </div>
      <div>
        <h3>Race:</h3>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    character: state.character.character
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);
