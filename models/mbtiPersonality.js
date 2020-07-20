const mongoose = require('mongoose');

const mbtiPersonalitySchema = new mongoose.Schema({
    personality_type: {
        type: String,
        required: true
    },
    personality_name: {
      type: String,
      required: true
    },
    personality_desc: {
      type: String,
      required: true
    }
},
{
  timestamps: true,
}
);

function modelAreadyDeclared() {
  try {
      module.exports = mongoose.model('MBTIPersonality')
      return true
  } catch (e) {
      return false
  }
}

if (!modelAreadyDeclared()) {
  const MBTIPersonality = mongoose.model('MBTIPersonality', mbtiPersonalitySchema);
  module.exports = MBTIPersonality;
}
