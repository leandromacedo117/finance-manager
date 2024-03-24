import React from 'react'
import Button from '../button/Button'

const LoginC = ({item, textButton}) => {
  return (
    <form action="">
        <div className='input-login'>
            <h3>{item}</h3>
            <input type="text" placeholder='example@gmail.com' />
            <input type="password" name="" placeholder='Password' />
        </div>
        <Button name={item}/> 
    </form>

  )
}

export default LoginC