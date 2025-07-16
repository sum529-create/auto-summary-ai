import React from 'react'

const SortedButton = ({children, isSelected, onToggle}) => {
  return (
    <button onClick={onToggle} style={{background: isSelected ? '#9196F5' : '#B3B8FF'}} className='rounded-full text-sumi-night py-1 px-3 text-base'>
      {children}
    </button>
  )
}

export default SortedButton