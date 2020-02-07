import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CharacterForm = props => {
  const [charactarInfo, setCharacterInfo] = useState({
    name: "",
    age: ""
  });

  const onChange = e => {
    setCharacterInfo({ ...charactarInfo, [e.target.name]: e.target.value });
  };

  const routeToClassSelect = e => {
    e.preventDefault();
    let path = "/selectClass";
    props.history.push(path);
  };

  return (
    <form>
      <input
        onChange={onChange}
        type="text"
        name="name"
        id="name"
        value={charactarInfo.name}
        placeholder="Enter Character Name"
      />
      <input
        onChange={onChange}
        type="number"
        name="age"
        id="age"
        value={charactarInfo.age}
        placeholder="Character Age"
      />
      <button onClick={routeToClassSelect}>Select Class</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CharacterForm)
);
