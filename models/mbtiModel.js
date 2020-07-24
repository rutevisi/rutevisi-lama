const mongoose = require('mongoose');

const mbtiQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  indicator: {
    type: String,
    required: true
  },
  flip: {
    type: Boolean,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
  },
  categories: {
    type: Array,
    required: true
  }
});

function modelAreadyDeclared() {
  try {
      module.exports = mongoose.model('mbtiQuestionSchema')
      return true
  } catch (e) {
      return false
  }
}

if (!modelAreadyDeclared()) {
  module.exports = mbtiQuestionSchema;
}
