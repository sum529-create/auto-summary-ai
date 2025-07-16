import React from 'react'

const NoteTextArea = ({title, isReadOnly, children}) => {
  return (
    <div className="bg-sumi-night p-4 rounded flex-1">
      <h4 className='text-lg my-1 text-sumi-starlight'>{title}</h4>
      <textarea className="w-full p-4 min-h-60 bg-gray-400 resize-none outline-none foucs:(ring-2 ring-blue-500)" name="" id="" readOnly={isReadOnly}></textarea>
      {children}
    </div>
  )
}

export default NoteTextArea