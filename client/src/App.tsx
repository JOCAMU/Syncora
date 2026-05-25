import { Routes, Route } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/Projectspages'
import LoginPage from './pages/loginPages'
import NotFoundPage from './pages/notfoundPages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App