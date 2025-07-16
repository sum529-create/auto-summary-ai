import React from 'react'

const NoteTextArea = ({title, isReadOnly, children}) => {
  return (
    <div className="bg-sumi-night p-4 rounded flex-1">
      <h4 className='text-lg my-1 text-sumi-starlight'>{title}</h4>
      <textarea 
        className="w-full p-4 min-h-60 bg-sumi-moon resize-none outline-none focus:(ring-2 ring-blue-500)" 
        name="note-content" 
        id="note-content" 
        aria-label={title} readOnly={isReadOnly}>

      </textarea>
      {children}
    </div>
  )
}

export default NoteTextArea