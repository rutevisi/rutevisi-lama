import dbConnect from '../../../../services/dbConnect'
import MBTIQuestion from '../../../../models/mbtiModel'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    if(method === 'POST'){
        try {
            const question = req.body.question;
            const indicator = req.body.indicator;
            const flip = req.body.flip;
        
            const newMBTIQuestion = new MBTIQuestion({question, indicator, flip});
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