import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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


