import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";

import noteReducer, { appendNote } from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

import noteService from "./services/notes";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

noteService.getAll().then((notes) => {
  notes.map((note) => store.dispatch(appendNote(note)));
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
