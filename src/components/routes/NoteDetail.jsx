import NoteArea from "../notes/NoteArea";
import FlexRow from "../ui/FlexRow";
import NoteTextArea from "../notes/NoteTextArea";
import Button from "../ui/Button";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectNoteById } from "../../store/noteSelector";
import { useEffect, useState } from "react";
import { addNote, deleteNote, updateNote } from "../../store/notesSlice";
import { format } from "date-fns";

const NoteDetail = () => {
  const {id} = useParams();
  const note = useSelector(selectNoteById(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '')
  const [summary, setSummary] = useState(note?.summary || '')

  useEffect(() => {
    if(note) {
      setContent(note.content || '')
      setTitle(note.title || '')
      setSummary(note.summary || '')
    } else {
      initNote();
    }
  },[note])

  const initNote = () => {
    setContent('')
    setTitle('')
    setSummary('')
  }

  const onHandleAddNote = () => {
    if(!title.trim()) return alert('제목을 입력해주세요.')
    if(!content.trim()) {
      return alert('메모를 입력해주세요')
    }
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
    initNote();
  }

  const onHandleDeleteNote = () => {
    if(window.confirm('해당 노트를 정말 삭제하시겠습니까?')){
      dispatch(deleteNote({id}))
      navigate('/')
      initNote();
    }
  }

  const onHandleUpdateNote = () => {
    const modifyNote = {
      id,
      title,
      content,
      summary
    }
    dispatch(updateNote(modifyNote));
    navigate('/');
    initNote();
  }
  
  return (
    <NoteArea>
      {
        note ? 
        <>
          <FlexRow>
            <div>
              <span className="text-gray-400 text-sm">{note.date}</span>
              <h3 className="text-gray-200 text-2xl font-bold">{note.title}</h3>
            </div>
            <div className="space-x-2">
              <Button onClick={onHandleDeleteNote} variant="danger">삭제</Button>
              <Button onClick={onHandleUpdateNote} variant="success">수정</Button>
            </div>
          </FlexRow>
          <div className="flex gap-2 my-4">
            <NoteTextArea title="메모" content={content} onChange={setContent} isReadOnly={false}>
              <div className="my-4">
                <Button>요약</Button>
              </div>
            </NoteTextArea>
            <NoteTextArea title="요약 결과" content={summary} isReadOnly={true}/>
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
                <Button>요약</Button>
              </div>
            </NoteTextArea>
            <NoteTextArea title="요약 결과" isReadOnly={true}/>
          </div>
          <div className="flex justify-end">
            <Button onClick={onHandleAddNote} variant="success">추가</Button>
          </div>
        </>
      }
      
    </NoteArea>
  );
};

export default NoteDetail;
