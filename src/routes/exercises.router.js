import { Router } from 'express'
import { getExercises, getExerciseById, addExercises, updateExercise, deleteExercise } from '../controllers/index.js'

const router = Router()

router.get('/', getExercises)

router.get('/:id', getExerciseById)

router.post('/', addExercises)

router.put('/', updateExercise)

router.delete('/', deleteExercise)

export default router
