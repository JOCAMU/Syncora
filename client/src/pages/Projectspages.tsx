import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
type ProjectsPageProps = {
  projects: any[]
  setProjects: React.Dispatch<React.SetStateAction<any[]>>
}

function ProjectsPage({
  projects,
  setProjects
}: ProjectsPageProps) {

const navigate = useNavigate()
const [projectTitle, setProjectTitle] = useState('')
const [description, setDescription] = useState('')
const [members, setMembers] = useState('')
const [startDate, setStartDate] = useState('')
const [deadline, setDeadline] = useState('')
const createProject = () => {

  
 
 const newProject = {
    id: projects.length + 1,
    title: projectTitle,
    description: description,
    members: members.split(','),
    status: 'Pending',
   creationDate: startDate,
    deadline: deadline
  }

  setProjects([...projects, newProject])
console.log(newProject)
  navigate('/')
}
return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Gestión de Proyectos
      </h1>

      <div className="bg-gray-800 p-6 rounded-xl max-w-2xl">

        <h2 className="text-2xl mb-6">
          Crear Proyecto
        </h2>

        <div className="flex flex-col gap-4">

        <input
           type="text"
            placeholder="Nombre del proyecto"
            value={projectTitle}
             onChange={(e) => setProjectTitle(e.target.value)}
            className="bg-gray-700 px-4 py-2 rounded-lg"
/>

          <textarea
          placeholder="Descripción del proyecto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-700 px-4 py-2 rounded-lg h-32"
/>
         
<input
  type="text"
  placeholder="Participantes (ej: José, Ana, Carlos)"
  value={members}
  onChange={(e) => setMembers(e.target.value)}
  className="bg-gray-700 px-4 py-2 rounded-lg"
/>
          <div>
            <label className="block mb-2">
              Fecha de inicio
            </label>

            <input
  type="date"
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
  className="bg-gray-700 px-4 py-2 rounded-lg w-full"
/>
          </div>

          <div>
            <label className="block mb-2">
              Fecha límite
            </label>

            <input
  type="date"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
  className="bg-gray-700 px-4 py-2 rounded-lg w-full"
/>
          </div>

          <select className="bg-gray-700 px-4 py-2 rounded-lg">
            <option>Pendiente</option>
            <option>En curso</option>
            <option>Completado</option>
          </select>

        <button
  onClick={createProject}
  className="bg-purple-600 px-4 py-2 rounded-lg"
>
  Crear Proyecto
</button>
        </div>

      </div>

    </div>
  )
}

export default ProjectsPage