import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './pages/register'
import { LogIn } from './pages/login'
import { HomePage } from './pages/home'
import { PracticePage } from './pages/practice'
import { LearnPage } from './pages/learn'
import { RevisePage } from './pages/revise'
import { Settings } from './pages/settings'
import { LeftAside } from './components/left-aside'
import { AuthProvider} from './context/auth'

function App() {
  return (
    <>
      <AuthProvider>
        <LeftAside />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/revise" element={<RevisePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
