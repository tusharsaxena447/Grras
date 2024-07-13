import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
