import { Exercises } from '../../classes/index.js'

const exercisesManager = new Exercises()

export const getExercises = (req, res) => {
  const { limit } = req.query

  const exercises = exercisesManager.getExercises({ limit })

  res.json(exercises)
}

export const addExercises = (req, res) => {}

export const updateExercise = (req, res) => {}
