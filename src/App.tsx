import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './pages/register'
import { LogIn } from './pages/login'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>
    </>
  )
}

export default App
