import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './pages/register'
import { LogIn } from './pages/login'
import { Home } from './pages/home'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
    </>
  )
}

export default App
