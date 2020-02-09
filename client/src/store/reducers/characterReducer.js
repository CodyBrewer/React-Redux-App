import { SELECT_CLASS, SUBMIT_INFO } from "../actions/types";

const initialState = {
  character: {
    name: "",
    age: "",
    race: "",
    level: 0,
    characterClass: null,
    subclass: ""
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_CLASS:
      return { ...state, characterClass: payload };
    case SUBMIT_INFO:
      console.log(payload);
    // const { name, age } = payload;
    // return { ...state, name: name, age: age };
    default:
      return state;
  }
};
