import React, { useState } from "react";
import { connect } from "react-redux";
import { changeInput } from "../../store/actions";
import CharactarClasses from "../CharactarClasses/CharactarClasses";
import Races from "../Races/Races";
import Levels from "../Levels/Levels";

const CharacterSheet = props => {
  const [newCharacter, setNewCharacter] = useState({ name: "" });

  const onChange = e => {
    setNewCharacter({ [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <form className="flex flex-col border-solid border-4 border-black">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newCharacter.name}
          onChange={onChange}
        />
        <Races />
        <CharactarClasses />
        <Levels />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);
