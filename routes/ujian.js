const router = require('express').Router();
const JSON = require('flatted');

let MBTIQuestion = require('../models/mbti-question.model');

router.route('/mbti').get(async (req, res) => {
    let tempA = await MBTIQuestion.find({ indicator : "A" }).sort({}).limit(3);
    let tempB = await MBTIQuestion.find({ indicator : "B" }).sort({}).limit(3);
    let tempC = await MBTIQuestion.find({ indicator : "C" }).sort({}).limit(3);
    let tempD = await MBTIQuestion.find({ indicator : "D" }).sort({}).limit(3);
    let tempE = await MBTIQuestion.find({ indicator : "E" }).sort({}).limit(3);

    // let soalsoal = Object.assign(tempA, tempB, tempC, tempD, tempE);


    // const flatted = JSON.stringify(tempA);

    // const tempA =  await  MBTIQuestion.find({ indicator : "A" }).sort({}).limit(3);
       

    res.send([...tempA,...tempB,...tempC,...tempD,...tempE]);

    //   .then(mbtiQuestions => res.json(mbtiQuestions))
    //   .catch(err => res.status(400).json(`Error: ${err}`));
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