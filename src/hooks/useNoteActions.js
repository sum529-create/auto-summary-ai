
import { addNote, deleteNote, updateNote } from "../store/notesSlice";
import { fetchOpenAI } from "../api";
import { NOTE_DETAIL } from "../store/noteDetailReducer";
import { confirmData } from "../lib/validation";
import { format } from "date-fns";
import { v4 as uuidv4 } from 'uuid'

/**
 * 메모 작성 버튼 클릭 시 페이지 이동
 * @param {*} navigate 
 */

export const handleClick = (navigate) => {
  const id = crypto.randomUUID?.() ?? uuidv4()
  navigate(`/notes/${id}`)
}

/**
 * 노트 추가/수정/삭제 로직
 * @param {*} param0 
 * @returns 
 */
export const handleNoteActions = ({navigate, dispatch, id}) => {
  const handleAddNote = (title, content, summary) => {
    if(!confirmData(title, content, summary)) return;
    const now = new Date();
    const newNote = {
      id,
      title: title.trim(),
      content: content.trim(),
      date: format(now, 'yyyy.MM.dd HH:mm'),
      summary
    }
    dispatch(addNote(newNote))
    navigate('/');
  }
  const handleUpdateNote = (title, content, summary) => {
    if(!confirmData(title, content, summary)) return;
      const modifyNote = {
      id,
      title,
      content,
      summary
    }
    dispatch(updateNote(modifyNote));
    navigate('/');
  }
  const handleDeleteNote = () => {
    if(window.confirm('해당 노트를 정말 삭제하시겠습니까?')){
      dispatch(deleteNote({id}))
      navigate('/')
    }
  }
  return {handleAddNote, handleUpdateNote, handleDeleteNote}
}

// 메모 요약하기 api 통신
export const handleSubmitSummary = async(isLoading, stateDispatch, content) => {
  const {SET_LOADING, SET_SUMMARY} = NOTE_DETAIL
  if(isLoading) return;
  stateDispatch({type: SET_LOADING, payload:true});
  if(content.length < 30){
    return alert('요약하려면 최소 30자 이상 입력해주세요.');
  }
  try {
    const res = await fetchOpenAI(content);
    stateDispatch({type: SET_SUMMARY, payload:res.choices[0].message.content})
  } catch (error) {
    console.error('Failed to Fetch Data:', error)
  } finally {
    stateDispatch({type: SET_LOADING, payload:false})
  }
}