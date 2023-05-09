import { combineReducers } from "redux";
import Reducer from "./Reducer";
import Reducer2 from "./Reducer2";

const reducer = combineReducers ({
    ApiData:Reducer,
    SignUpData: Reducer2
})

export default reducer