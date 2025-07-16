import React from 'react'
import { Link } from 'react-router-dom'
import FlexRow from '../ui/FlexRow'

const NoteListItem = ({data}) => {
  return (
    <li className='cursor-pointer bg-sumi-moon p-4 rounded'>
      <Link to={`/notes/${data.id}`}>
        <FlexRow>
          <div>
            <h3 className='text-gray-900 text-lg'>{data.title}</h3>
            <p className='text-gray-700 text-base'>{data.content}</p>
          </div>
          <div className='text-gray-500 text-sm'>{data.date}</div>
        </FlexRow>
      </Link>
    </li>
  )
}

export default NoteListItem