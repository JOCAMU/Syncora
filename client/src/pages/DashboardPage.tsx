
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectCard from '../components/ProjectCard'


function DashboardPage() {

  const [projects, setProjects] = useState([ 

    {
       id: 1,
       title: 'Syncora Web App',
       description: 'Aplicación para gestión de proyectos',
       members: ['José', 'Ana'],
       status: 'In Progress',
       deadline: '30/06/2026'
    },
    {
      id: 2,
      title: 'CRM Dashboard',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Marketing Platform',
      status: 'Planning'
    }
 ])
  const [projectTitle, setProjectTitle] = useState('')
  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      title: projectTitle || 'Nuevo Proyecto',
      status: 'Pending'
    }
  

    setProjects([...projects, newProject])
    setProjectTitle('')
  }
const deleteProject = (id: number) => {
  const filteredProjects = projects.filter(
    (project) => project.id !== id
  )
  setProjects(filteredProjects)
}
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-6">

        <input
  type="text"
  placeholder="Nombre del proyecto"
  value={projectTitle}
  onChange={(e) => setProjectTitle(e.target.value)}

  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      addProject()
    }
  }}

  className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg mr-4"
/>
         
          <button
            onClick={addProject}
            className="bg-purple-600 px-4 py-2 rounded-lg mb-6"
          >
            Añadir Proyecto
          </button>

          <div className="flex gap-6 flex-wrap">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                status={project.status}
                onDelete={() => deleteProject (project.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default DashboardPage