import {
  FETCH_CLASSES,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
  SELECT_CLASS
} from "./types";

const apiUrl = "https://www.dnd5eapi.co/api/";

export const fetchClasses = () => dispatch => {
  dispatch({
    type: FETCH_CLASSES
  });
  fetch(`${apiUrl}classes`)
    .then(res => res.json())
    .then(res =>
      dispatch({ type: FETCH_CLASSES_SUCCESS, payload: res.results })
    )
    .catch(err => {
      dispatch({ type: FETCH_CLASSES_FAILURE, payload: err.message });
    });
};

export const selectClass = selectedClass => dispatch => {
  console.log(selectedClass);
  dispatch({
    type: SELECT_CLASS,
    payload: selectedClass
  });
};
