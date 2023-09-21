import exercisesData from '../data/exercises.json' assert { type: 'json' }
import { matchAttributes, updateFile } from '../utils/index.js'

const PATH = './data/exercises.json'

class Exercises {
  constructor() {
    this.exercises = exercisesData
  }

  getExercises({ limit, name, movementId, type }) {
    const exercises = this.exercises.reduce((prev, curr) => {
      if (matchAttributes(curr, { name, movementId, type })) prev.push(curr)

      return prev
    }, [])

    return limit ? exercises.slice(0, limit) : exercises
  }

  getExerciseById({ id }) {
    const exercise = this.exercises.filter(exercise => exercise.id === parseInt(id))

    if (!exercise.length) throw new Error('Exercise not found!')

    return exercise
  }

  async addExercise({ name, movementId, type }) {
    if (!name) throw new Error('Name is missing!')

    const id = this.exercises.length ? Math.max(...this.exercises.map(exercise => exercise.id)) + 1 : 1

    const newExercise = { id, name, movementId, type }

    this.exercises = [...this.exercises, newExercise]

    await updateFile(PATH, this.exercises)

    return newExercise
  }

  async updateExercise({ id, name, movementId, type }) {
    if (!id) throw new Error('ID is missing!')
    if (!name) throw new Error('Name is missing!')

    this.exercises = this.exercises.map(exercise => {
      if (exercise.id === id) {
        name ? (exercise.name = name) : null
        movementId ? (exercise.movementId = movementId) : null
        type ? (exercise.type = type) : null

        return exercise
      }

      return exercise
    })

    await updateFile(PATH, this.exercises)

    return 'Item updated success!'
  }

  async deleteExercise({ id }) {
    if (!id) throw new Error('ID is missing!')

    if (!this.exercises.some(exercise => exercise.id === id)) throw new Error('Exercise Not Found!')

    this.exercises = this.exercises.filter(exercise => exercise.id !== id)

    await updateFile(PATH, this.exercises)

    return 'Item deleted success!'
  }
}

export default Exercises
