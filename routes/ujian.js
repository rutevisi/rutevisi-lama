const router = require('express').Router();

let MBTIQuestion = require('../models/mbti-question.model');

router.route('/mbti').get((req, res) => {
    MBTIQuestion.find()
      .then(mbtiQuestions => res.json(mbtiQuestions))
      .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/mbti/add').post((req, res) => {
    const question = req.body.question;
    const indicator = req.body.indicator;
  
    const newMBTIQuestion = new MBTIQuestion({question, indicator});
    newMBTIQuestion.save()
    .then(users => res.json('Question ADDED'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;