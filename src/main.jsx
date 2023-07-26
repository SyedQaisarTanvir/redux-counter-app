import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import counterReducer from "../src/State Provider/CounterSlice";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
