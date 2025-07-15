import React from 'react'

const FlexRow = ({children, className=""}) => {
  return (
    <div className={`flex gap-2 items-center text-left justify-between ${className}`}>{children}</div>
  )
}

export default FlexRow