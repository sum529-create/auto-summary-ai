import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  lists: [
    {
      id: 'ac08588b-b1bd-4647-984f-46c46f890aa4',
      title: 'a안녕하세요',
      content: '이것은 테스트용으로 작성된 콘텐츠 입니다. 리스트 테스트용으로서 사용되는 더미 데이터 입니다. 추후 삭제 예정입니다.',
      summary: '테스트용 더미 데이터 텍스트',
      date: '2025.07.29 17:44'
    },
    {
      id: '12bd2d01-f314-4bd2-adea-d36b4eb72591',
      title: 'c안녕하세요2',
      content: '이것은 테스트용으로 작성된 콘텐츠 입니다. 리스트 테스트용으로서 사용되는 더미 데이터 입니다. 추후 삭제 예정입니다.',
      summary: '테스트용 더미 데이터 텍스트',
      date: '2025.07.28 17:44'
    },
    {
      id: '12bd2d01-f314-4bd2-adea-d36b4eb72599',
      title: 'b안녕하세요3',
      content: '이것은 테스트용으로 작성된 콘텐츠 입니다. 리스트 테스트용으로서 사용되는 더미 데이터 입니다. 추후 삭제 예정입니다.',
      summary: '테스트용 더미 데이터 텍스트',
      date: '2025.07.26 17:44'
    }
  ],
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
        state.lists = [...state.lists].sort((a,b) => {
          if(a.date > b.date) return -1;
          else if(a.date < b.date) return 1;
          else return 0;
        })
      } else {
        state.lists = [...state.lists].sort((a,b) => {
          if(a.title > b.title) return 1;
          else if(a.title < b.title) return -1;
          else return 0;
        })
      }
    }
  }
})

export const {addNote, deleteNote, updateNote, setSortedType} = noteSlice.actions

export default noteSlice.reducer