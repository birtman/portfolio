import { combineReducers } from "redux";
import sliderArrowReducer from "./sliderArrowReducer";
import selectedProjectReducer from "./selectedProjectReducers";
import modeReducer from "./modeReducer";

const allReducers = combineReducers({
  slider: sliderArrowReducer,
  selected: selectedProjectReducer,
  mode: modeReducer,
});
export default allReducers;
