import { useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectCard from '../components/ProjectCard'

type DashboardPageProps = {
  projects: any[]
  setProjects: React.Dispatch<React.SetStateAction<any[]>>
}

function DashboardPage({
  projects,
  setProjects
}: DashboardPageProps) {

 const navigate = useNavigate()
 

const deleteProject = (id: number) => {
  const filteredProjects = projects.filter(
    (projects) => projects.id !== id
  )
  setProjects(filteredProjects)
}
  return (
    <div className="min-h-screen bg-gray-500 text-black p-8">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="p-6">
        
         <button
  onClick={() => navigate('/projects')}
  className="bg-gray-600 px-4 py-2 rounded-lg mb-6"
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