import dbConnect from '../../../services/dbConnect'
import User from '../../../models/user.model'

dbConnect();

export default async (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
}