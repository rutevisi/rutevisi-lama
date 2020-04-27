const router = require('express').Router();
const JSON = require('flatted');
var shuffle = require('shuffle-array');

let MBTIQuestion = require('../models/mbti-question.model');

router.route('/mbti').get(async (req, res) => {
    let tempA = await MBTIQuestion.find({ indicator : "A" });
    let tempB = await MBTIQuestion.find({ indicator : "B" });
    let tempC = await MBTIQuestion.find({ indicator : "C" });
    let tempD = await MBTIQuestion.find({ indicator : "D" });
    let tempE = await MBTIQuestion.find({ indicator : "E" });

    function shuffleAndSlice(array, start, end) {
        temp = shuffle(array);
        temp = temp.slice(start, end);
        return temp;
    }

    tempA = shuffleAndSlice(tempA, 0, 3);
    tempB = shuffleAndSlice(tempB, 0, 3);
    tempC = shuffleAndSlice(tempC, 0, 3);
    tempD = shuffleAndSlice(tempD, 0, 3);
    tempE = shuffleAndSlice(tempE, 0, 3);


    
    
    var soalready = shuffle([...tempA,...tempB,...tempC,...tempD,...tempE]);

    res.send(soalready);

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