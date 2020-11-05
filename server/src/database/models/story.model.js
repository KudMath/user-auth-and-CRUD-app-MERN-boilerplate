const mongoose = require('mongoose')

const { Schema } = mongoose

const StorySchema = new Schema({
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
  isQuiz: {
    type: Boolean,
  },
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
  src: {
    // TODO type URL
    type: String,
  },
})

const storyModel = mongoose.model('Stories', StorySchema)

module.exports = storyModel
