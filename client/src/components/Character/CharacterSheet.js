import React, { useState } from "react";
import { connect } from "react-redux";
import { changeInput } from "../../store/actions";

const CharacterSheet = props => {
  const [newCharacter, setNewCharacter] = useState({ name: "" });

  const onChange = e => {
    setNewCharacter({ [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <form className="border-solid border-4 border-black">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newCharacter.name}
          onChange={onChange}
        />
        <label htmlFor="race">Race:</label>
        <select name="race" id="race"></select>
        <label htmlFor="class">Class:</label>
        <select name="class" id="class"></select>
        <label htmlFor="level">Level:</label>
        <select name="level" id="level"></select>
        <label htmlFor="subclass">Subclass:</label>
        <select name="subclass" id="subclass"></select>
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
