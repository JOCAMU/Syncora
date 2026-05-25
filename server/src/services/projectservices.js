const getAllProjects = () => {
  return [
    {
      id: 1,
      name: 'Syncora Web App',
      status: 'In Progress'
    }
  ]
}

const createProject = () => {
  return {
    message: 'Proyecto creado correctamente'
  }
}

const deleteProject = (id) => {
  return {
    message: `Proyecto ${id} eliminado`
  }
}

module.exports = {
  getAllProjects,
  createProject,
  deleteProject
}