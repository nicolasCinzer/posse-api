import fs from 'node:fs/promises'
import exercisesData from '../data/exercises.json' assert { type: 'json' }

import { matchAttributes } from '../utils/index.js'

class Exercises {
  constructor() {
    this.exercises = exercisesData
  }

  getExercises({ limit }) {
    const exercises = this.exercises

    if (limit) limit < exercises.length ? (exercises.length = limit) : null

    return this.exercises
  }

  getExerciseById({ id }) {
    const exercise = this.exercises.filter(exercise => exercise.id === parseInt(id))

    if (!exercise.length) throw new Error('Exercise not found!')

    return exercise
  }

  getExercisesByAttributes({ name, movementId, type }) {
    const exercise = this.exercises.reduce((prev, curr) => {
      if (matchAttributes(curr, { name, movementId, type })) prev.push(curr)

      return prev
    }, [])

    return exercise
  }

  async addExercise({ name, movementId, type }) {
    if (!name) throw new Error('Name is missing!')

    const id = this.exercises.length ? Math.max(...this.exercises.map(exercise => exercise.id)) + 1 : 1

    const newExercise = { id, name, movementId, type }

    this.exercises = [...this.exercises, newExercise]

    try {
      await fs.writeFile('./data/exercises.json', JSON.stringify(this.exercises))
    } catch (err) {
      throw new Error(`Error updating database!`)
    }

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

    try {
      await fs.writeFile('./data/exercises.json', JSON.stringify(this.exercises))
    } catch (err) {
      throw new Error(`Error updating database!`)
    }

    return 'Item updated success!'
  }

  async deleteExercise({ id }) {
    if (!id) throw new Error('ID is missing!')

    if (!this.exercises.some(exercise => exercise.id === id)) throw new Error('Exercise Not Found!')

    this.exercises = this.exercises.filter(exercise => exercise.id !== id)

    try {
      await fs.writeFile('./data/exercises.json', JSON.stringify(this.exercises))
    } catch (err) {
      throw new Error(`Error updating database!`)
    }

    return 'Item deleted success!'
  }
}

export default Exercises
