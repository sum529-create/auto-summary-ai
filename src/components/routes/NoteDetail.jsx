import NoteArea from "../notes/NoteArea";
import FlexRow from "../ui/FlexRow";
import NoteTextArea from "../notes/NoteTextArea";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectNoteById } from "../../lib/noteSelector";
import { useEffect, useReducer, useRef } from "react";
import {isUUID} from "../../lib/textFormat"
import { detailReducer, initialDetailState, NOTE_DETAIL } from "../../store/noteDetailReducer";
import { handleNoteActions, handleSubmitSummary } from "../../hooks/useNoteActions";

const NoteDetail = () => {
  const {id} = useParams();
  const note = useSelector(selectNoteById(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, stateDispatch] = useReducer(detailReducer, initialDetailState)
  const {title, content, summary, isLoading} = state;
  const prevContentRef = useRef(content);
  const {handleAddNote, handleUpdateNote, handleDeleteNote} = handleNoteActions({navigate, dispatch, id})
  const {SET_STATE, SET_INIT, SET_SUMMARY} = NOTE_DETAIL
  const hasMounted = useRef(false);

  useEffect(() => {
    if(id && !isUUID(id)){
      alert('잘못된 접근입니다.')
      navigate('/')
    }
  }, [id, navigate])
  useEffect(() => {
    if(note) {
      stateDispatch({
        type: SET_STATE, 
        title: note.title || '', 
        content: note.content || '', 
        summary: note.summary || ''
      })
      prevContentRef.current = note.content
    } else {
      stateDispatch({type:SET_INIT})
    }
  },[note, SET_STATE, SET_INIT])
  useEffect(() => {
    if(!hasMounted.current){
      hasMounted.current = true;
      return;
    }
    if(content !== prevContentRef.current){
      stateDispatch({type:SET_SUMMARY, payload: ""})
      prevContentRef.current = content;
    }
  },[content, SET_SUMMARY])
  
  return (
    <NoteArea>
      <FlexRow>
        <div className="flex flex-col space-y-2">
          {
            note 
            ? <span className="text-gray-400 text-sm">{note.date}</span>
            : <label htmlFor="title" className="text-white">제목</label>
          }
          <input type="text" id="title" value={title} placeholder="제목을 입력해주세요." className="bg-gray-200 rounded border py-1 px-2 border-sumi-nebula" onChange={e => stateDispatch({type:'SET_TITLE', payload:e.target.value})} />
        </div>
      </FlexRow>
      <div className="flex gap-2 my-4">
        <NoteTextArea title="메모" content={content} onChange={e => stateDispatch({type:'SET_CONTENT', payload: e})} isReadOnly={false}>
          <div className="my-4">
            <Button onClick={() => handleSubmitSummary(isLoading, stateDispatch, content)}>{isLoading ? "요약 중..." : "요약"}</Button>
          </div>
        </NoteTextArea>
        <NoteTextArea title="요약 결과" content={summary} isReadOnly={true}/>
      </div>
      <div className="flex justify-end space-x-2">
        {
          note ?
          <>
            <Button onClick={handleDeleteNote} variant="danger">삭제</Button>
            <Button onClick={() => handleUpdateNote(title, content, summary)} variant="success">수정</Button>  
          </>
          : <Button onClick={() => handleAddNote(title, content, summary)} variant="success">추가</Button>
        }
      </div>
    </NoteArea>
  );
};

export default NoteDetail;
