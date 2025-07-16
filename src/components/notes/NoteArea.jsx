import React from 'react'

const NoteArea = ({children}) => {
  return (
    <div className="p-4 bg-sumi-deepspace md:w-2/3 mx-4 md:mx-auto my-5 rounded">
      {children}
    </div>
  )
}

export default NoteArea