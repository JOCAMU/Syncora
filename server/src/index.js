const projectRoutes = require('./routes/projectsRoutes')
const express = require('express')

const app = express()

const PORT = 3000
app.use('/api/projects', projectRoutes)
app.get('/', (req, res) => {
  res.send('Syncora backend funcionando 🚀')
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`)
})