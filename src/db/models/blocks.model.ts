import { Schema, model, Types } from 'mongoose'

const blocksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  duration: {
    format: {
      type: String,
      required: true
    },
    value: {
      type: Date,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    }
  },
  mesocycles: [Types.ObjectId],
  estimated_start_date: {
    type: Date,
    required: true
  },
  estimated_end_date: {
    type: Date,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  current_week: {
    type: Number,
    default: 0
  },
  amount_of_weeks: {
    type: Number,
    required: true
  }
})

export const blocksModel = model('Blocks', blocksSchema)
