import { Schema, model, Types } from 'mongoose'

const sessionsSchema = new Schema({
  mesocycle_id: {
    type: Types.ObjectId,
    required: true
  },
  title: {
    type: String
  },
  exercises: [
    {
      exercise_id: {
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
      comments: String,
      joint_pain: {
        type: String,
        enum: ['None', 'Low', 'Mid', 'High']
      }
    }
  ],
  status: {
    type: String,
    enum: ['Not Started', 'Finished'],
    default: 'Not Started'
  },
  week: {
    type: Number,
    default: 0
  },
  day: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
})

export const sessionsModel = model('Sessions', sessionsSchema)
