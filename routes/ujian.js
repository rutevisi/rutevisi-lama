const router = require('express').Router();

let MBTIQuestion = require('../models/mbti-question.model');

router.route('/mbti').get((req, res) => {
    MBTIQuestion.find()
      .then(mbtiQuestions => res.json(mbtiQuestions))
      .catch(err => res.status(400).json(`Error: ${err}`));
  });

  module.exports = router;