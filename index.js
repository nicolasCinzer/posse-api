import express from 'express'
import { getExercises, addExercises, updateExercise } from './routes/exercises/exercises.js'

const app = express()

app.get('/exercises', getExercises)
app.get('/exercises/add', addExercises)
app.get('/exercises/update', updateExercise)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
