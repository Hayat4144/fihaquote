import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextState } from "./Context/Context_State";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import PersistReducer from "./Context/Reducer/All_My_Reducers";

// create store
const store = createStore(PersistReducer);
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* provide state to all the apps with redux and context api */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContextState>
          <App />
        </ContextState>
      </PersistGate>
    </Provider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
