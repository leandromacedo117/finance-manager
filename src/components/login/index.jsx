import React, { useState } from 'react'

import MoneyImage from '../../images/money.png'
import './index.css'
import LoginC from './LoginC'
import Register from '../register/Register'

const Login = ({item, textButton}) => {
    const [register, setRegister] = useState(false)

    const test = () => {
        setRegister(true)
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
            > { !register ? textButton : ''}
            </button>
            </div>
        </div>
    </div>
  )
}

export default Login