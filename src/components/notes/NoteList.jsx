import React from 'react'
import NoteListItem from './NoteListItem'

const NoteList = () => {
  const mockData = [
    {
      id: 1,
      title: '안녕하세요',
      content: '안녕하세요 콘텐츠입니다.',
      date: '2025.07.15 18:26'
    }
  ]
  return (
    <ul className='my-4'>
      {
        mockData.map(e => (
          <NoteListItem key={e.id} data={e}/>
        ))
      }
    </ul>
  )
}

export default NoteList