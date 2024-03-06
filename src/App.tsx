import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './pages/register'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/login" element={<Register />} />
        </Routes>
      </main>
    </>
  )
}

export default App
