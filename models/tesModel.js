const mongoose = require('mongoose');

const UjianSchema = new mongoose.Schema({
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
},
{
  timestamps: true,
});

function modelAreadyDeclared() {
  try {
      module.exports = mongoose.model('UjianSchema')
      return true
  } catch (e) {
      return false
  }
}

if (!modelAreadyDeclared()) {
  module.exports = UjianSchema;
}