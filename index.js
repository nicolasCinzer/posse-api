import express from 'express'
import { getExercises, getExerciseById, addExercises, updateExercise, deleteExercise } from './routes/exercises/index.js'

const app = express()

app.use(express.json())

app.get('/exercises', getExercises)
app.get('/exercises/:id', getExerciseById)
app.post('/exercises', addExercises)
app.put('/exercises', updateExercise)
app.delete('/exercises', deleteExercise)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
