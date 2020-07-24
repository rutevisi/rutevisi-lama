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
  }
},
{
  timestamps: true,
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
