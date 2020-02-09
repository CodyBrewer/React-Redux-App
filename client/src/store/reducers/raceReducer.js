import {
  FETCH_RACES,
  FETCH_RACES_SUCCESS,
  FETCH_RACES_FAILURE
} from "../actions/types";

const initialState = {
  races: [],
  isFetching: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RACES:
      return { ...state, isFetching: true, error: null };
    case FETCH_RACES_SUCCESS:
      return { ...state, isFetching: false, races: payload, error: null };
    case FETCH_RACES_FAILURE:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
};
