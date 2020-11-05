const mongoose = require('mongoose')

const { Schema } = mongoose

// setting user schema
const WorkspaceSchema = new Schema({
  name: {
    type: String,
    // second parameter of array is for message display
    match: [/[a-zA-Z0-9]/, 'is invalid'],
    required: [true, 'cant be blank'],
  },
  users: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
    roles: [{
      type: String,
      enum: ['reader', 'editor', 'admin'],
      default: 'reader',
    }],
  }],
  stripeCustomerId: {
    type: String,
    required: true,
  }
})

// create user model
const workspaceModel = mongoose.model('Worspaces', WorkspaceSchema)

module.exports = workspaceModel
