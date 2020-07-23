import bcrypt from 'bcrypt'
import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;

    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = bcrypt.hash(req.body.password, 10);

    return new Promise(resolve => {
        apiHandler(res, method, {
            POST: (response) => {

                // Find user di db
                const checkUser = await models.User.findOne({email});

                // Ngecek apakah user udah ada apa belom
                if(checkUser){
                    connection.close();
                    response.status(400).json({auth: false, msg: 'User already exist'});
                }else{
                    models.User.create({fullname, email, password}, (error, user) => {
                        if (error) {
                            connection.close();
                            response.status(500).json({ error });
                        } else {
                            // Membuat token
                            const token = jwt.sign({ id: user._id }, process.env.SECRET, {
                                expiresIn: 86400
                            });

                            response.status(200).send({ auth: true, token: token});
                            connection.close();
                            resolve();
                        }
                    })
                }
            }
          });
    })
})