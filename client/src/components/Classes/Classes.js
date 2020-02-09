import React from "react";
import { connect } from "react-redux";

const CharactarClasses = props => {
  const { classes } = props.classes;
  console.log(classes);

  return (
    <>
      {classes.length ? (
        <>
          <label htmlFor="characterClasses">Class:</label>
          <select name="classes" id="charactarClasses">
            {classes.map((e, index) => {
              return (
                <option key={index} value={e.name}>
                  {e.index}
                </option>
              );
            })}
          </select>
        </>
      ) : null}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {};
};

const mapsStateToProps = state => {
  return {
    classes: state.classes
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(CharactarClasses);
