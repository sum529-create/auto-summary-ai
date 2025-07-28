import NoteArea from "../notes/NoteArea";
import FlexRow from "../ui/FlexRow";
import NoteTextArea from "../notes/NoteTextArea";
import Button from "../ui/Button";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectNoteById } from "../../store/noteSelector";
import { useEffect, useReducer, useRef } from "react";
import { addNote, deleteNote, updateNote } from "../../store/notesSlice";
import { format } from "date-fns";
import {isUUID} from "../../lib/textFormat"
import { fetchOpenAI } from "../../api";
import { detailReducer, initialDetailState } from "../../store/noteDetailReducer";

const NoteDetail = () => {
  const {id} = useParams();
  const note = useSelector(selectNoteById(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, stateDispatch] = useReducer(detailReducer, initialDetailState)
  const {title, content, summary, isLoading} = state;
  const prevContentRef = useRef(content);

  useEffect(() => {
    if(id && !isUUID(id)){
      alert('잘못된 접근입니다.')
      navigate('/')
    }
  }, [id, navigate])
  useEffect(() => {
    if(note) {
      stateDispatch({
        type: 'SET_STATE', 
        title: note.title || '', 
        content: note.content || '', 
        summary: note.summary || ''
      })
    } else {
      stateDispatch({type:'SET_INIT'})
    }
  },[note])
  useEffect(() => {
    if(content !== prevContentRef.current){
      stateDispatch({type:'SET_SUMMARY', payload: ""})
      prevContentRef.current = content;
    }
  },[content])

  const confirmData = () => {
    if(!title.trim()) { 
      alert('제목을 입력해주세요.')
      return false;
    }
    if(!content.trim()) { 
      alert('메모를 입력해주세요.')
      return false;
    }
    if(!summary.trim()) { 
      alert('요약 버튼을 클릭하여 요약 결과를 정리해주세요.')
      return false;
    }
    return true;
  }

  const handleAddNote = () => {
    if(!confirmData()) return;
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

  const handleDeleteNote = () => {
    if(window.confirm('해당 노트를 정말 삭제하시겠습니까?')){
      dispatch(deleteNote({id}))
      navigate('/')
    }
  }

  const handleUpdateNote = () => {
    if(!confirmData()) return;
    const modifyNote = {
      id,
      title,
      content,
      summary
    }
    dispatch(updateNote(modifyNote));
    navigate('/');
  }

  const handleSubmit = async() => {
    if(isLoading) return;
    stateDispatch({type: 'SET_LOADING', payload:true});
    if(content.length < 30){
      return alert('요약하려면 최소 30자 이상 입력해주세요.');
    }
    try {
      const res = await fetchOpenAI(content);
      stateDispatch({type:'SET_SUMMARY', payload:res.choices[0].message.content})
    } catch (error) {
      console.error('Failed to Fetch Data:', error)
    } finally {
      stateDispatch({type: 'SET_LOADING', payload:false})
    }
  }
  
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
            <Button onClick={handleSubmit}>{isLoading ? "요약 중..." : "요약"}</Button>
          </div>
        </NoteTextArea>
        <NoteTextArea title="요약 결과" content={summary} isReadOnly={true}/>
      </div>
      <div className="flex justify-end space-x-2">
        {
          note ?
          <>
            <Button onClick={handleDeleteNote} variant="danger">삭제</Button>
            <Button onClick={handleUpdateNote} variant="success">수정</Button>  
          </>
          : <Button onClick={handleAddNote} variant="success">추가</Button>
        }
      </div>
    </NoteArea>
  );
};

export default NoteDetail;
