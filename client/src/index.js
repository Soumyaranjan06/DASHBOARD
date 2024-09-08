// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { configureStore } from '@reduxjs/toolkit';
// import globalReducer from "state"
// import { Provider} from 'react-redux';
// import {api} from "state/api"

// const store=configureStore({
//   reducer:{
//     global:globalReducer,
//     // [api.reducerPath]:api.reducer,
//   }
// })
// store.js




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
   
//   </React.StrictMode>
// );


// index.js or App.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from 'store'; // Adjust the path as necessary
// import App from './App';
// import { setupListeners} from '@reduxjs/toolkit/query';
// import {api} from "state/api";
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );




import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "state/api.js";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
