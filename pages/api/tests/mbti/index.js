import dbConnect from '../../../../services/dbConnect'
import MBTIQuestion from '../../../../models/mbti-question.model'
import shuffle from 'shuffle-array'

dbConnect();

export default async (req, res) => {
    
    function shuffleAndSlice(array, start, end) {
        let temp = shuffle(array);
        temp = temp.slice(start, end);
        return temp;
    }
    
    const tempA = shuffleAndSlice(await MBTIQuestion.find({ indicator : "A" }), 0, 3);
    const tempB = shuffleAndSlice(await MBTIQuestion.find({ indicator : "B" }), 0, 3);
    const tempC = shuffleAndSlice(await MBTIQuestion.find({ indicator : "C" }), 0, 3);
    const tempD = shuffleAndSlice(await MBTIQuestion.find({ indicator : "D" }), 0, 3);
    const tempE = shuffleAndSlice(await MBTIQuestion.find({ indicator : "E" }), 0, 3);
    
    const soalready = shuffle([...tempA,...tempB,...tempC,...tempD,...tempE]);

    res.send(soalready);
}