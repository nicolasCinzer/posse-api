import express from 'express'
import {
  getExercises,
  getExerciseById,
  getExercisesByAttributes,
  addExercises,
  updateExercise,
  deleteExercise,
  deleteExerciseById
} from './routes/exercises/index.js'

const app = express()

app.use(express.json())

app.get('/exercises', getExercises)
app.get('/exercises/:id', getExerciseById)
app.post('/exercises', getExercisesByAttributes)

app.post('/exercises/add', addExercises)

app.post('/exercises/update', updateExercise)

app.post('/exercises/delete', deleteExercise)
app.get('/exercises/delete/:id', deleteExerciseById)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
