import NoteListItem from './NoteListItem'
import { useSelector } from 'react-redux'

const NoteList = () => {
  const notes = useSelector(state => state.notes.lists);
  return (
    <ul className='my-4 space-y-5'>
      {
        notes.map(e => (
          <NoteListItem key={e.id} data={e}/>
        ))
      }
    </ul>
  )
}

export default NoteList