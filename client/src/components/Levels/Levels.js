import React, { useState } from "react";
import { connect } from "react-redux";
import { changeInput } from "../../store/actions";

const Levels = props => {
  const { level, setLevel } = props;
  console.log(`level is a `, typeof level, `it's value is `, level);
  const options = [];
  for (var i = 0; i < 10; i++) {
    options.push(
      <option onChange={onChange} key={i} value={level}>
        {i + 1}
      </option>
    );
  }

  const onChange = e => {
    setLevel(e.target);
  };

  return (
    <>
      <label htmlFor="level"></label>
      <select name="level" id="level" value={level}>
        {options}
      </select>
    </>
  );
};

const mapStateToProps = state => {
  return {
    level: state.classes.level
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLevel: target => {
      dispatch(changeInput(target));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Levels);
