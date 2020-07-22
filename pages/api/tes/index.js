import dbConnect from '../../../services/dbConnect'
import Ujian from '../../../models/tesModel'

dbConnect();

export default async (req, res) => {
    const { method } = req;
    const { query: { slug } } = req;

    return new Promise(resolve => {
        switch (method) {
            case 'GET':
                Ujian.find({slug})
                .then(tes => res.status(200).json(tes))
                .catch(err => res.status(400).json(`Error: ${err}`));
        }
    })
    
}