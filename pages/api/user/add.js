import dbConnect from '../../../../services/dbConnect'
import User from '../../../models/user.model'
import Bcrypt from 'bcryptjs'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    if(method === 'POST'){
        try {
            const username = req.body.username;
            const email = req.body.email;
            const password = Bcrypt.hashSync(req.body.password, 10);

            const newUser = new User({username, email, password});
            
            newUser.save()
            .then(users => res.json('Users ADDED'))
            .catch(err => res.status(400).json(`Error: ${err}`));
                
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }
    else{
        res.status(400).json({ success: false });
    }
}