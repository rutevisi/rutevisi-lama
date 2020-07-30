const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
	testname: {
		type: String,
		required: true,
	},
	testresult: {
		type: String,
		required: true,
		unique: true
    }
},{
  	timestamps: true,
});

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
	tier: {
		type: String
	},
	testHistory: [resultSchema],
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