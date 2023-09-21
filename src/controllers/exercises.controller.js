import { Exercises } from '../classes/index.js'

const exercisesManager = new Exercises()

export const getExercises = (req, res) => {
  const { limit, name, movementId, type } = req.query

  const exercises = exercisesManager.getExercises({ limit, name, movementId, type })

  res.status(200).json({ exercises, amountExercises: exercises.length })
}

export const getExerciseById = (req, res) => {
  const { id } = req.params

  try {
    const exercise = exercisesManager.getExerciseById({ id })

    res.status(200).json({ exercise })
  } catch (err) {
    res.status(404).send(err.message)
  }
}

export const addExercises = async (req, res) => {
  const { name, movementId, type } = req.body

  try {
    const newExercise = await exercisesManager.addExercise({ name, movementId, type })

    res.status(200).json({ message: 'Added Exercise Succes!', data: newExercise })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

export const updateExercise = async (req, res) => {
  const { id, name, movementId, type } = req.body

  try {
    const response = await exercisesManager.updateExercise({ id, name, movementId, type })

    res.status(200).json(response)
  } catch (err) {
    res.status(400).send(err.message)
  }
}

export const deleteExercise = async (req, res) => {
  const { id } = req.body

  try {
    const response = await exercisesManager.deleteExercise({ id })

    res.status(200).json(response)
  } catch (err) {
    res.status(400).send(err.message)
  }
}
