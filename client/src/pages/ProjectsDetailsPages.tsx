import { useParams } from 'react-router-dom'
type ProjectsDetailsPagesProps = {
  projects: any[]
}
function ProjectsDetailsPages({
  projects
}: ProjectsDetailsPagesProps) {
 
    const params = useParams()
    const project = projects.find( 
    (project) => project.title === params.id
  )

  return (      
    
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        {project?.title || 'Proyecto no encontrado'}    
      </h1>

     

       <div className="mt-4">
  <p className="text-sm text-gray-400">
    Descripción
  </p>

  <p className="text-white mt-1">
    {project?.description || 'No hay descripción disponible.'}
  </p>
</div>
<div className="mt-4">
  <p className="text-sm text-gray-400">
    Participantes
  </p>

  <p className="text-white mt-1">
    {project?.members?.join(', ') || 'No hay participantes asignados.'}
  </p>
</div>

<div className="mt-4">
  <p className="text-sm text-gray-400">
    Fecha de creación
  </p>

  <p className="text-white mt-1">
    {project?.creationDate || 'No hay fecha de creación disponible.'}
  </p>
</div>

<div className="mt-4">
  <p className="text-sm text-gray-400">
    Fecha límite
  </p>

  <p className="text-white mt-1">
    {project?.deadline || 'No hay fecha límite disponible.'}
  </p>
</div>
     
      </div>



    
  )
}

export default ProjectsDetailsPages