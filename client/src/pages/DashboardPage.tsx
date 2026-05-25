import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex items-center justify-center p-6">
          <h1 className="text-5xl font-bold">
            Dashboard Syncora 🚀
          </h1>
        </div>
      </div>
    </div>
  )
}
export default DashboardPage