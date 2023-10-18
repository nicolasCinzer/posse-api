import express from 'express'
import { exercisesRouter } from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.static('public'))

// Routes
app.use('/api/exercises', exercisesRouter)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
