const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  responsible: {
    type: String,
    required: true
  },
  comments: {
    type: String
  },
  priority: {
    type: String,
    required: true
  },
  duedate: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
}
)

module.exports = mongoose.model('Todo', TodoSchema)
