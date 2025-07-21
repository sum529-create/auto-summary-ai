import React from 'react'
import { Link } from 'react-router-dom'

const NavNoteListItem = ({data}) => (
  <li className='text-gray-200'>
    <Link to={`/notes/${data.id}`}>
      {data.title}
    </Link>
  </li>
)

export default NavNoteListItem