import React from 'react'

const FlexRow = ({children, className=""}) => {
  return (
    <div className={`flex gap-x-2 gap-y-3 items-center justify-between ${className}`}>
      {children}
    </div>
  )
}

export default FlexRow