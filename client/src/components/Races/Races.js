import React from "react";
import { connect } from "react-redux";

const CharactarClasses = props => {
  const { races } = props.races;
  console.log(races);

  return (
    <>
      {races.length ? (
        <>
          <label htmlFor="characterRace">Race:</label>
          <select name="races" id="characterRace">
            {races.map((e, index) => {
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
    races: state.races
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(CharactarClasses);
