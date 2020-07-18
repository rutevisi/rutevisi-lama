import dbConnect from '../../../../services/dbConnect'
import MBTIQuestion from '../../../../models/mbti-question.model'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    if(method === 'POST'){
        try {
            const question = req.body.question;
            const indicator = req.body.indicator;
        
            const newMBTIQuestion = new MBTIQuestion({question, indicator});
            newMBTIQuestion
                .save()
                .then(users => res.json('Question ADDED'))
                
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }
    else{
        res.status(400).json({ success: false });
    }
}