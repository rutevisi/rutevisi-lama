const mongoose = require('mongoose');

const fakboiQuestionSchema = new mongoose.Schema({
    question: {
        soal: {type: String},
        jawab: [{
            pilihan: {type: String},
            poin: {type: String}
        }]
    },
    flip: {
        type: Boolean,
    }
    },{
    timestamps: true,
    }
);

function modelAreadyDeclared() {
  try {
        module.exports = mongoose.model('fakboiQuestionSchema')
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    module.exports = fakboiQuestionSchema;
}
