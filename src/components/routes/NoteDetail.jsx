import NoteArea from "../notes/NoteArea";
import FlexRow from "../ui/FlexRow";
import NoteTextArea from "../notes/NoteTextArea";
import Button from "../ui/Button";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectNoteById } from "../../store/noteSelector";
import { useCallback, useEffect, useRef, useState } from "react";
import { addNote, deleteNote, updateNote } from "../../store/notesSlice";
import { format } from "date-fns";
import {isUUID} from "../../lib/textFormat"
import { fetchOpenAI } from "../../api";

const NoteDetail = () => {
  const {id} = useParams();
  const note = useSelector(selectNoteById(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '')
  const [summary, setSummary] = useState(note?.summary || '')
  const [isLoading, setIsLoading] = useState(false);
  const prevContentRef = useRef(content);

  const initNote = useCallback(() => {
    setContent('')
    setTitle('')
    setSummary('')
  }, [])

  useEffect(() => {
    if(id && !isUUID(id)){
      alert('잘못된 접근입니다.')
      navigate('/')
    }
  }, [id, navigate])
  useEffect(() => {
    if(note) {
      setContent(note.content || '')
      setTitle(note.title || '')
      setSummary(note.summary || '')
    } else {
      initNote();
    }
  },[note, initNote])
  useEffect(() => {
    if(content !== prevContentRef.current){
      setSummary("");
      prevContentRef.current = content;
    }
  },[content])

  const handleAddNote = () => {
    if(!title.trim()) return alert('제목을 입력해주세요.')
    if(!content.trim()) return alert('메모를 입력해주세요.')
    if(!summary.trim()) return alert('요약 버튼을 클릭하여 요약 결과를 정리해주세요.')
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
    setIsLoading(true);
    if(content.length < 30){
      return alert('요약하려면 최소 30자 이상 입력해주세요.');
    }
    try {
      const res = await fetchOpenAI(content);
      setSummary(res.choices[0].message.content)
    } catch (error) {
      console.error('Failed to Fetch Data:', error)
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <NoteArea>
      {
        note ? 
        <>
          <FlexRow>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400 text-sm">{note.date}</span>
              <input type="text" id="title" value={title} placeholder="제목을 입력해주세요." className="bg-gray-200 rounded border py-1 px-2 border-sumi-nebula" onChange={e => setTitle(e.target.value)} />
            </div>
          </FlexRow>
          <div className="flex gap-2 my-4">
            <NoteTextArea title="메모" content={content} onChange={setContent} isReadOnly={false}>
              <div className="my-4">
                <Button onClick={handleSubmit}>{isLoading ? "요약 중..." : "요약"}</Button>
              </div>
            </NoteTextArea>
            <NoteTextArea title="요약 결과" content={summary} isReadOnly={true}/>
          </div>
          <div className="flex justify-end space-x-2">
            <Button onClick={handleDeleteNote} variant="danger">삭제</Button>
            <Button onClick={handleUpdateNote} variant="success">수정</Button>
          </div>
        </>
        :
        <>
          <FlexRow>
            <div className="flex flex-col space-y-2">
              <label htmlFor="title" className="text-white">제목</label>
              <input type="text" id="title" value={title} placeholder="제목을 입력해주세요." className="bg-gray-200 rounded border py-1 px-2 border-sumi-nebula" onChange={e => setTitle(e.target.value)} />
            </div>
          </FlexRow>
          <div className="flex gap-2 my-4">
            <NoteTextArea onChange={setContent} content={content} title="메모" isReadOnly={false}>
              <div className="my-4">
                <Button onClick={handleSubmit}>{isLoading ? "요약 중..." : "요약"}</Button>
              </div>
            </NoteTextArea>
            <NoteTextArea title="요약 결과" content={summary} isReadOnly={true}/>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleAddNote} variant="success">추가</Button>
          </div>
        </>
      }
      
    </NoteArea>
  );
};

export default NoteDetail;
