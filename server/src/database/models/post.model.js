const mongoose = require('mongoose')

const { Schema } = mongoose

// setting post schema
const PostSchema = new Schema({
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
})

// create post model
const postModel = mongoose.model('Posts', PostSchema)

module.exports = postModel
