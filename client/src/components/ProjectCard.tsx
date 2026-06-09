import { Link } from 'react-router-dom'
type ProjectCardProps = {
  title: string
  status: string
 onDelete?: () => void 
}

function ProjectCard({ title, status, onDelete }: ProjectCardProps) {
  return (
    <div>
    <Link to={`/Projects/${title}`} > 
      <div className="bg-gray-600 p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-2">
          {title}
        </h2>

      <p className="text-gray-300">
        Estado: {status}
      </p>
     
    </div> 
 
    </Link>
{onDelete && (
        <button
          onClick={onDelete}
          className="bg-gray-300 px-4 py-2 rounded-lg mt-4"
        >
          Eliminar
        </button>
      )}  


</div>
)}

export default ProjectCard