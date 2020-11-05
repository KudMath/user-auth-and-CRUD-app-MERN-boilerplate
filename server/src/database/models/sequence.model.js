const mongoose = require('mongoose')

const { Schema } = mongoose

const SequenceSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  editors: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
  ],
  title: {
    // TODO type: I18NString || String
    type: String,
    required: true,
  },
  description: {
    // TODO type: I18NString || String
    type: String,
  },
  cover: {
    // TODO type URL
    type: String,
  },
  thumbnail: {
    // TODO type URL
    type: String,
  },
  stories: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Stories',
    },
  ],
})

// TODO sequences should finish with a quiz

const sequenceModel = mongoose.model('Sequences', SequenceSchema)

module.exports = sequenceModel
