import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Ohno_Blazeface-18_Point.ttf";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import test1 from "../src/images/Feature_Dimensions.png";


const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
