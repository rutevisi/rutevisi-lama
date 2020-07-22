const mongoose = require('mongoose');

const ujianSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  seotitle: {
    type: String,
    required: true
  },
  emojicon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  }
},
{
  timestamps: true,
});

function modelAreadyDeclared() {
  try {
      module.exports = mongoose.model('Ujian')
      return true
  } catch (e) {
      return false
  }
}

if (!modelAreadyDeclared()) {
  const Ujian = mongoose.model('Ujian', ujianSchema);
  module.exports = Ujian;
}