import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Syncora
      </h1>

      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar