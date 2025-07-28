import { createSlice } from "@reduxjs/toolkit";

export const initialState = []

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload)
    },
    deleteNote: (state, action) => {
      return state.filter(e => e.id !== action.payload.id)
    },
    updateNote: (state, action) => {
      const note = state.find(e => e.id === action.payload.id);
      if(note){
        note.title = action.payload.title;
        note.content = action.payload.content;
        note.summary = action.payload.summary;
      }
    }
  }
})

export const {addNote, deleteNote, updateNote} = noteSlice.actions

export default noteSlice.reducer