const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mbtiQuestionSchema = new Schema({
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

const MBTIQuestion = mongoose.model('MBTIQuestion', mbtiQuestionSchema);

module.exports = MBTIQuestion;
