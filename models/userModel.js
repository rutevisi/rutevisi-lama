const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	fullname: {
		type: String,
		required: true,
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
	},
	testHistory: [{
		testname: { type: String },
		testresult: { type: String },
		testdate: { type: Date, default: Date.now }
	}],
	user_photo: { type: String }
	},
{
  	timestamps: true,
});

function modelAreadyDeclared() {
  try {
      module.exports = mongoose.model('UserSchema')
      return true
  } catch (e) {
      return false
  }
}

if (!modelAreadyDeclared()) {
  module.exports = UserSchema;
}