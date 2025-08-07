import React from 'react'
import { cn } from '../../lib/utils'

const SortedButton = ({children, isSelected, onToggle}) => {
  return (
    <button 
      onClick={onToggle}
      className={cn(
        'rounded-full text-sumi-night py-1 px-3 text-base', 
        isSelected ? "bg-sumi-nebula" : "bg-sumi-starlight"
      )}
    >
      {children}
    </button>
  )
}

export default SortedButton