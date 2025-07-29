export const NOTE_DETAIL = {
  SET_TITLE : 'SET_TITLE',
  SET_CONTENT : 'SET_CONTENT',
  SET_SUMMARY : 'SET_SUMMARY',
  SET_LOADING : 'SET_LOADING',
  SET_STATE : 'SET_STATE',
  SET_INIT : 'SET_INIT'
}

export const initialDetailState = {
  title: '',
  content: '',
  summary: '',
  isLoading: false
}

export function detailReducer(state, action) {
  switch (action.type) {
    case NOTE_DETAIL.SET_TITLE:
      return { ...state, title: action.payload };
    case NOTE_DETAIL.SET_CONTENT:
      return { ...state, content: action.payload };
    case NOTE_DETAIL.SET_SUMMARY:
      return { ...state, summary: action.payload };
    case NOTE_DETAIL.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case NOTE_DETAIL.SET_STATE:
      return { ...state, title: action.title, content: action.content, summary: action.summary  }
    case NOTE_DETAIL.SET_INIT:
      return { ...state, title: '', content: '', summary: ''}
    default:
      return state;
  }
}