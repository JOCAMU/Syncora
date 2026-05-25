import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        Syncora
      </h2>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/login">Login</Link>
      </nav>
    </aside>
  )
}

export default Sidebar