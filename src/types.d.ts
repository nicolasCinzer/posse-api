type ExerciseType = 'Basic' | 'Accesory' | 'Variant'

type Exercise = {
  id: number
  name: string
  movementId: number
  type: ExerciseType
}

type ExerciseNOID = Omit<Exercise, 'id'>
