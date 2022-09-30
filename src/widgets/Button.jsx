import React from 'react'

const Button = ({label}) => {
  return (
    <button 
        type="button" 
        className="btn bg-gradient-dark w-100 my-4 mb-2"
    >
          {label}
    </button>
  )
}

export default Button