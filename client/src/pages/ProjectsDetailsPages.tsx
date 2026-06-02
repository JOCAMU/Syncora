import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projects'

function ProjectsDetailsPages() {
  const params = useParams()

  const project = projectsData.find(
    (project) => project.title === params.id
  )

  return (      
    
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        {project?.title || 'Proyecto no encontrado'}    
      </h1>

      <div className="bg-gray-800 p-6 rounded-xl">
        <p><strong>Estado:</strong> {project?.status}</p>

        <p className="mt-4">
          <strong>Descripción:</strong>
          {project?.description || 'No hay descripción disponible.'}
        </p>

        <p className="mt-4">
          <strong>Participantes:</strong>
          {project?.members.join(', ') || 'No hay participantes asignados.'}
        </p>

        <p className="mt-4">
          <strong>Fecha creación:</strong>
          {project?.creationDate|| 'No hay fecha de creación disponible.'}
        </p>
    
        <p className="mt-4">
          <strong>Fecha límite:</strong>
          {project?.deadline || 'No hay fecha límite disponible.'}
        </p>
      </div>
    </div>
  )
}

export default ProjectsDetailsPages