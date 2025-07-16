import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'rounded py-1 px-3 transition',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white shadow hover:bg-primary/90',
        danger:
          'bg-danger text-white shadow hover:bg-danger/90',
        success:
          'bg-success text-white shadow hover:bg-success/90',
        outline:
          'bg-white border border-primary shadow-sm hover:bg-gray-100',
        light:
          'bg-gray-300 text-sumi-dark shadow-sm hover:bg-gray-400'
      }
    },
    size:  {
      default: 'h-9 px-3 py-[6px] text-base',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Button = ({ onClick, type = 'button', children, variant='default', size='default' ,className = '', fullWidth=false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(buttonVariants({variant, size}),className, fullWidth && 'w-full')}
    >
      {children}
    </button>
  );
};

export default Button; 