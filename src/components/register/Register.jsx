import React from 'react'
import './Register.scss';
import Button from '../button/Button';
import Login from '../login';

const Register = () => {
  return (
    <div className="container-register">
        <h3>Register</h3>
        <form
        method="post"
        >
          <div className="input-register">
            <label htmlFor="">Name:</label>
            <input type="text" placeholder='your Name'/>
          </div>
          <div className="input-register">
            <label htmlFor="">E-mail:</label>
            <input type="text"  placeholder='example@gmail.com' />
          </div>
          <div className="input-register">
            <label htmlFor="">Password;</label>
            <input type="password" placeholder='password'/>
          </div>
          <Button name='Register'/>
        </form>
        {/* <Login
        textButton='I have an account'
        /> */}
    </div>
  )
}

export default Register