import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/Projectspages'
import LoginPage from './pages/loginPages'
import NotFoundPage from './pages/notfoundPages'
import ProjectsDetailsPages from './pages/ProjectsDetailsPages'
function App() {
  const [projects, setProjects] = useState<any[]>([])
 return (
    <Routes>
      <Route
  path="/"
  element={
    <DashboardPage
      projects={projects}
      setProjects={setProjects}
    />
  }
/>
      <Route
  path="/Projects"
  element={
    <ProjectsPage
      projects={projects}
      setProjects={setProjects}
    />
  }
/>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route
  path="/Projects/:id"
  element={
    <ProjectsDetailsPages
      projects={projects}
    />
  }
/>
    </Routes>
  )
}

export default App