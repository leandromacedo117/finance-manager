import React, { useState } from 'react'

import MoneyImage from '../../images/money.png'
import './index.scss'
import LoginC from './LoginC'
import Register from '../register/Register'

const Login = ({item, textButton}) => {
    const [register, setRegister] = useState(false)

    const test = () => {
        setRegister(!register)
    }
  return (
    <div className="Login">
        <div className='container-login'>
            <div className="container-img">
                <img src={MoneyImage} alt="" width='220' />
            </div>
            <div className="form-login">
            {
                !register ? (
                    <LoginC
                    item='Login'
                    textButton='register how'
                    />
                ) : (
                    <Register/>
                )
                 
            }
            <button 
            type="submit"
            className='button-create'
            onClick={test}
            > { !register ? textButton : 'I have an account'}
            </button>
            </div>
        </div>
    </div>
  )
}

export default Login