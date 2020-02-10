import React from "react";
import { connect } from "react-redux";
import { fetchSubClasses } from "../../store/actions";

const CharactarClasses = props => {
  const { classes } = props.classes;
  const { fetchSubClasses } = props;
  console.log(classes);

  const charactarClassChange = e => {
    console.log(e.target.value);
    const charactarClass = e.target.value;
    fetchSubClasses(charactarClass);
  };

  return (
    <>
      {classes.length ? (
        <>
          <label htmlFor="characterClasses">Class:</label>
          <select
            onChange={charactarClassChange}
            name="classes"
            id="charactarClasses"
          >
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
  return {
    fetchSubClasses: charactarClass => {
      dispatch(fetchSubClasses(charactarClass));
    }
  };
};

const mapsStateToProps = state => {
  return {
    classes: state.classes
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(CharactarClasses);
