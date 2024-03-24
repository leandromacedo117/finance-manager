import React from 'react'
import './Button.css'

const Button = ({name}) => {
  return (
    <>
        <button 
        type="submit"
        className='Button-components'
        > {name}
        </button>
    </>
  )
}

export default Button