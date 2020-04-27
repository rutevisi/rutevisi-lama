const router = require('express').Router();
var shuffle = require('shuffle-array');

let MBTIQuestion = require('../models/mbti-question.model');

router.route('/mbti').get(async (req, res) => {
    let tempA = shuffleAndSlice(await MBTIQuestion.find({ indicator : "A" }), 0, 3);
    let tempB = shuffleAndSlice(await MBTIQuestion.find({ indicator : "B" }), 0, 3);
    let tempC = shuffleAndSlice(await MBTIQuestion.find({ indicator : "C" }), 0, 3);
    let tempD = shuffleAndSlice(await MBTIQuestion.find({ indicator : "D" }), 0, 3);
    let tempE = shuffleAndSlice(await MBTIQuestion.find({ indicator : "E" }), 0, 3);

    function shuffleAndSlice(array, start, end) {
        temp = shuffle(array);
        temp = temp.slice(start, end);
        return temp;
    }
    
    var soalready = shuffle([...tempA,...tempB,...tempC,...tempD,...tempE]);

    res.send(soalready);
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