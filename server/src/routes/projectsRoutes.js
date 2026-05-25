const express = require('express')

const router = express.Router()

const {
  getProjects,
  createNewProject,
  removeProject
} = require('../controllers/projectController')

router.get('/', getProjects)

router.post('/', createNewProject)

router.delete('/:id', removeProject)

module.exports = router