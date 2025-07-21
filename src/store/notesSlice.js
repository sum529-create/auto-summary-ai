import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: '12bd2d01-f314-4bd2-adea-d36b4eb72591',
    title: '안녕하세요',
    content: '안녕하세요 콘텐츠입니다.',
    date: '2025.07.15 18:26',
    summary: '소개글',
  }
]

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