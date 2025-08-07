import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  lists: [],
  sortedType: 'recently'
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.lists.push(action.payload)
    },
    deleteNote: (state, action) => {
      state.lists = [...state.lists].filter(e => e.id !== action.payload.id)
    },
    updateNote: (state, action) => {
      const note = state.lists.find(e => e.id === action.payload.id);
      if(note){
        note.title = action.payload.title;
        note.content = action.payload.content;
        note.summary = action.payload.summary;
      }
    },
    setSortedType: (state, action) => {
      state.sortedType = action.payload

      if(state.sortedType === 'recently'){
        state.lists.sort((a,b) => {
          return new Date(b.date.replace(/\./g, '-')) - new Date(a.date.replace(/\./g, '-'));
        })
      } else {
        state.lists.sort((a,b) => {
          return a.title.localeCompare(b.title);
        })
      }
    }
  }
})

export const {addNote, deleteNote, updateNote, setSortedType} = noteSlice.actions

export default noteSlice.reducer