import exercisesData from '../data/exercises.json' assert { type: 'json' }

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
    return this.exercises.filter(exercise => exercise.id === parseInt(id))
  }

  addExercise({ name, movementId, type }) {
    if (!name) throw new Error('Name is missing')

    const id = this.exercises.length ? Math.max(...this.exercises.map(exercise => exercise.id)) + 1 : 1

    const newExercise = { id, name, movementId, type }

    this.exercises = [...this.exercises, newExercise]

    return this.exercises
  }

  updateExercise({ id, name, movementId, type }) {}
}

export default Exercises
