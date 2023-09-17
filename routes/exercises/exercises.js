import { Exercises } from '../../classes/index.js'

const exercisesManager = new Exercises()

export const getExercises = (req, res) => {
  const { limit } = req.query

  const exercises = exercisesManager.getExercises({ limit })

  res.json({ exercises, amountExercises: exercises.length })
}

export const getExerciseById = (req, res) => {
  const { id } = req.params

  try {
    const exercise = exercisesManager.getExerciseById({ id })

    res.json({ exercise })
  } catch (err) {
    res.status(404).send(err.message)
  }
}

export const getExercisesByAttributes = (req, res) => {
  const { name, movementId, type } = req.body

  try {
    const exercises = exercisesManager.getExercisesByAttributes({ name, movementId, type })

    res.json(exercises)
  } catch (err) {
    res.status(404).send(err.message)
  }
}

export const addExercises = async (req, res) => {
  const { name, movementId, type } = req.body

  try {
    const newExercise = await exercisesManager.addExercise({ name, movementId, type })

    res.json({ message: 'Added Exercise Succes!', data: newExercise })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

export const updateExercise = async (req, res) => {
  const { id, name, movementId, type } = req.body

  try {
    const response = await exercisesManager.updateExercise({ id, name, movementId, type })

    res.json(response)
  } catch (err) {
    res.status(400).send(err.message)
  }
}

export const deleteExercise = async (req, res) => {
  const { id } = req.body

  try {
    const response = await exercisesManager.deleteExercise({ id })

    res.json(response)
  } catch (err) {
    res.status(400).send(err.message)
  }
}

export const deleteExerciseById = async (req, res) => {
  const { id } = req.params

  try {
    const response = await exercisesManager.deleteExercise({ id: parseInt(id) })

    res.json(response)
  } catch (err) {
    res.status(400).send(err.message)
  }
}
