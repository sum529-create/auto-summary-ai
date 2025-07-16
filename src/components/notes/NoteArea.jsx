import React from 'react'
import { cn } from '../../lib/utils'

const NoteArea = ({children}) => {
  return (
    <div className={cn("p-4 md:w-2/3 mx-4 md:mx-auto my-5 rounded", "bg-sumi-deepspace")}>
      {children}
    </div>
  )
}

export default NoteArea