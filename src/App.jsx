import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { useState } from 'react'
import './App.css'

import Login from './components/login'
import Register from './components/register/Register'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
          exact
          path='/'
          element={<Home/>}
          />
          <Route
          exact
          path='/register'
          element={<Register/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
