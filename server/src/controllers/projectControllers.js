const {
  getAllProjects,
  createProject,
  deleteProject
} = require('../services/projectService')

const getProjects = (req, res) => {
  const projects = getAllProjects()

  res.json(projects)
}

const createNewProject = (req, res) => {
  const newProject = createProject()

  res.status(201).json(newProject)
}

const removeProject = (req, res) => {
  const deletedProject = deleteProject(req.params.id)

  res.json(deletedProject)
}

module.exports = {
  getProjects,
  createNewProject,
  removeProject
}