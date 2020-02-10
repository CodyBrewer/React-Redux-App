import {
  FETCH_CLASSES,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
  ON_INPUT_CHANGE,
  FETCH_SUBCLASSES,
  FETCH_SUBCLASSES_SUCCESS
} from "../actions/types";

const initialState = {
  classes: [],
  subClasses: [],
  level: 1,
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
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value
      };
    case FETCH_SUBCLASSES:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SUBCLASSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        subClasses: [...payload]
      };
    default:
      return state;
  }
};
