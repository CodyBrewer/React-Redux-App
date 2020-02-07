import React, { useEffect } from "react";
import { connect } from "react-redux";

const Character = props => {
  const { character } = props;

  console.log(character.characterClass);

  return (
    <>
      <p>Your Character</p>
      <ul>
        <li>Class: {character.characterClass}</li>
      </ul>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Character);
