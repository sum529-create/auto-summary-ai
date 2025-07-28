export const initialDetailState = {
  title: '',
  content: '',
  summary: '',
  isLoading: false
}

export function detailReducer(state, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_CONTENT':
      return { ...state, content: action.payload };
    case 'SET_SUMMARY':
      return { ...state, summary: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_STATE':
      return { ...state, title: action.title, content: action.content, summary: action.summary  }
    case 'SET_INIT':
      return { ...state, title: '', content: '', summary: ''}
    default:
      return state;
  }
}