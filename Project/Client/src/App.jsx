import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Home from './components/Home'
import {Toaster} from 'react-hot-toast'
import Login from './components/Login'
function App() {
  return (
    <>
      <div><Toaster/></div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
