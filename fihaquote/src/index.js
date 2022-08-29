import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextState } from './Context/Context_State';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allreducers from './Context/Reducer/allreducer';

// create store
const store = createStore(allreducers) ;

const root = ReactDOM.createRoot(document.getElementById('root'));
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
