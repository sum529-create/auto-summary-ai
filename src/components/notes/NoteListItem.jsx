import React from 'react'
import { Link } from 'react-router-dom'
import FlexRow from '../ui/FlexRow'

const NoteListItem = ({data}) => {
  return (
    <li className='cursor-pointer bg-sumi-moon p-4 rounded'>
      <Link to={`/notes/${data.id}`}>
        <FlexRow>
          <div className="flex-1 min-w-0">
            <h3 className='text-gray-900 text-lg' data-testid="note-title">{data.title}</h3>
            <p className='text-gray-700 text-base max-w-full min-w-0 flex-grow overflow-hidden text-ellipsis whitespace-nowrap'>
              {data.content.slice(0, 50)}
            </p>
          </div>
          <div className='text-gray-500 text-sm whitespace-nowrap'>{data.date}</div>
        </FlexRow>
      </Link>
    </li>
  )
}

export default NoteListItem