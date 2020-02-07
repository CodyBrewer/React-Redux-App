import { SELECT_CLASS } from "../actions/types";

const initialState = {
  character: {
    characterClass: null
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_CLASS:
      return { ...state, characterClass: payload };
    default:
      return state;
  }
};
