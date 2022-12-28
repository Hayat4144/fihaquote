import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextState } from "./Context/Context_State";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import All_My_Reducres from "./Context/Reducer/All_My_Reducers";
import thunkMiddleware from "redux-thunk";

// create store
const store = createStore(All_My_Reducres,applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* provide state to all the apps with redux and context api */}
    <Provider store={store}>
      <ContextState>
        <App />
      </ContextState>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
