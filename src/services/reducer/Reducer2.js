import { SIGNUP_DATA } from "../Constant";

let initailState = {
  signUpData: [],
};
const Reducer2 = (state = initailState, action) => {
  switch (action.type) {
    case SIGNUP_DATA:
      return {
          ...state,
         signUpData: [...state.signUpData , action.payload]
      };
    default:
      return state;
  }
};

export default Reducer2;
