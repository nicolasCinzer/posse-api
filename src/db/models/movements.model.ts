import { Schema, model, Types } from 'mongoose'

const movementsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  exercise_id: Types.ObjectId
})

export const movementsModel = model('Movements', movementsSchema)
