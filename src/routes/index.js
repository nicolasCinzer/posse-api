import { Router } from 'express'
import exercisesRouter from './exercises.router.js'

const router = Router()

router.use('/api/', exercisesRouter)

export default router
