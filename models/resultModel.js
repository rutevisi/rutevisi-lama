const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    result: {type: String},
    testname: {type: String}
},
{
    timestamps: true,
});

function modelAreadyDeclared() {
  try {
        module.exports = mongoose.model('resultSchema')
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    module.exports = resultSchema;
}
