import { Router } from 'express'
import { getExercises, getExerciseById, addExercises, updateExercise, deleteExercise } from '../controllers/index.js'

const router = Router()

router.get('/exercises', getExercises)

router.get('/exercises/:id', getExerciseById)

router.post('/exercises', addExercises)

router.put('/exercises', updateExercise)

router.delete('/exercises', deleteExercise)

export default router
