import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      state.push(action.payload);
    },
    toggleImportanceOf(state, action) {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, important: !note.important }
          : note
      );
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export default noteSlice.reducer;
