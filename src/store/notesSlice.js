import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: 1,
    title: '안녕하세요',
    content: '안녕하세요 콘텐츠입니다.',
    date: '2025.07.15 18:26'
  }
]

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = state.notes.push(action.payload)
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(e => e.id !== action.payload.id)
    },
    updateNote: (state, action) => {
      state.notes.map(e => {
        if(e.id === action.payload.id){
          return {
            title: action.payload.title,
            content: action.payload.content,
            summary: action.payload.summary
          }
        }
        return e;
      })
    }
  }
})

export const {addNote, deleteNote, updateNote} = noteSlice.actions

export default noteSlice.reducer