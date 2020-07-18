const mongoose = require('mongoose');

const mbtiQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  indicator: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
});

function modelAreadyDeclared() {
  try {
      module.exports = mongoose.model('MBTIQuestion')
      return true
  } catch (e) {
      return false
  }
}

if (!modelAreadyDeclared()) {
  const MBTIQuestion = mongoose.model('MBTIQuestion', mbtiQuestionSchema);
  module.exports = MBTIQuestion;
}
