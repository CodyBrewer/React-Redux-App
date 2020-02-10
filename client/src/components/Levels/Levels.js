import React, { useState } from "react";
import { connect } from "react-redux";
import { changeInput } from "../../store/actions";

const Levels = props => {
  const { level, setLevel } = props;

  const onChange = e => {
    setLevel(e.target);
  };

  const options = [];

  for (let i = 0; i < 10; i++) {
    options.push(
      <option value={i + 1} key={i}>
        {i + 1}
      </option>
    );
  }

  return (
    <>
      <label htmlFor="level">
        Level:
        <select name="level" id="level" value={level} onChange={onChange}>
          {options}
        </select>
      </label>
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
