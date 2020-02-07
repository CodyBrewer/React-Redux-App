import {
  FETCH_CLASSES,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE
} from "../actions/types";

const initialState = {
  classes: [],
  isFetching: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CLASSES:
      return { ...state, isFetching: true, classes: [], error: null };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        classes: payload,
        error: null
      };
    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    default:
      return state;
  }
};
