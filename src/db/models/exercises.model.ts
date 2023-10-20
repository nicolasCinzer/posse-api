import { Schema, model, Types } from 'mongoose'

const exercisesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    exercise_type: {
      type: String,
      enum: ['Basic', 'Variant', 'Accesory', 'Warm Up'],
      required: true
    },
    movement_id: {
      type: Types.ObjectId
    }
  },
  prs: [
    {
      _id: {
        type: Types.ObjectId,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      },
      series: {
        type: Number,
        required: true
      },
      unit: {
        type: String,
        enum: ['LBs', 'KGs'],
        required: true
      },
      comments: String
    }
  ]
})

export const exercisesModel = model('Exercises', exercisesSchema)
