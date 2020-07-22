import dbConnect from '../../../../services/dbConnect'
import MBTIPersonality from '../../../../models/mbtiPersonality'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    if(method === 'GET'){
        MBTIPersonality.find()
        .then(type => res.json(type))
        .catch(err => res.status(400).json(`Error: ${err}`));
    }
    else if(method === 'POST'){
        try {
            const personality_type = req.body.question;
            const personality_desc = req.body.indicator;
        
            const newMBTIPersonality = new MBTIPersonality({personality_type, personality_desc});
            newMBTIPersonality
                .save()
                .then(type => res.json('Type ADDED'))
                
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }
    else{
        res.status(400).json({ success: false });
    }
}