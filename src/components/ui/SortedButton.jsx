import React from 'react'

const SortedButton = ({children, isSelected, onToggle}) => {
  return (
    <button onClick={onToggle} style={{background: isSelected ? '#B3B8FF' : '#8588be'}} className='rounded-full text-sumi-night py-1 px-3 text-base'>
      {children}
    </button>
  )
}

export default SortedButton