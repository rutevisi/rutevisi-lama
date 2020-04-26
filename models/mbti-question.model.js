const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mbtiQuestionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
},
{
  timestamps: true,
});

const MBTIQuestion = mongoose.model('MBTIQuestion', mbtiQuestionSchema);

module.exports = MBTIQuestion;
