import { combineReducers } from "redux";
import sliderArrowReducer from "./sliderArrowReducer";
import selectedProjectReducer from "./selectedProjectReducers";

const allReducers = combineReducers({
  slider: sliderArrowReducer,
  selected: selectedProjectReducer,
});
export default allReducers;
