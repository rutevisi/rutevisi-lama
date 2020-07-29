const mongoose = require('mongoose');

const negaraManaQuestionSchema = new mongoose.Schema({
    question: {
        soal: {type: String},
        jawab: [{
            pilihan: {type: String},
            indikator: {type: String}
        }]
    },
    factor: {type: String}
});

function modelAreadyDeclared() {
  try {
        module.exports = mongoose.model('negaraManaQuestionSchema')
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    module.exports = negaraManaQuestionSchema;
}
