import React, { useState } from 'react'
import Login from '../../components/login'

const Home = () => {
    const [userLogin, setUserLogin] = useState(false)
  return (
    <div className="Home">
        {
        !userLogin ? (<Login
            item='Login'
            textButton='register how'
            />)
        : <Login
            
        />
        }
    </div>
  )
}

export default Home