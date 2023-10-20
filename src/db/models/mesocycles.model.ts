import { Schema, model, Types } from 'mongoose'

const mesocylesSchema = new Schema({
  block_id: {
    type: Types.ObjectId,
    required: true
  },
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
    },
    required: true
  },
  sessions: [Types.ObjectId],
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

export const mesocylesModel = model('Mesocyles', mesocylesSchema)
