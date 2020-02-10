import * as ACTION from "./types";

const apiUrl = "https://www.dnd5eapi.co/api/";

export const fetchClasses = () => dispatch => {
  dispatch({
    type: ACTION.FETCH_CLASSES
  });
  fetch(`${apiUrl}classes`)
    .then(res => res.json())
    .then(res =>
      dispatch({ type: ACTION.FETCH_CLASSES_SUCCESS, payload: res.results })
    )
    .catch(err => {
      dispatch({ type: ACTION.FETCH_CLASSES_FAILURE, payload: err.message });
    });
};

export const fetchRaces = () => dispatch => {
  dispatch({
    type: ACTION.FETCH_RACES
  });
  fetch(`${apiUrl}races`)
    .then(res => res.json())
    .then(res =>
      dispatch({ type: ACTION.FETCH_RACES_SUCCESS, payload: res.results })
    )
    .catch(err => {
      dispatch({ type: ACTION.FETCH_RACES_FAILURE, payload: err.message });
    });
};

export const selectClass = selectedClass => dispatch => {
  console.log(selectedClass);
  dispatch({
    type: ACTION.SELECT_CLASS,
    payload: selectedClass
  });
};

export const submitInfo = async characterInfo => dispatch => {
  dispatch({
    type: ACTION.SUBMIT_INFO,
    payload: characterInfo
  });
};

export const changeInput = target => {
  console.log(target.value);
  return {
    type: ACTION.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
};
