import jwt from 'jsonwebtoken'
import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;

    return new Promise(resolve => {
        apiHandler(res, method, {
            GET: async (response) => {
                const token = await req.headers.authorization.split(" ")[1];

                if(token){
                    jwt.verify(token, process.env.SECRET, (err, decode) => {
                        if(decode){
                            models.User.findById(decode.id, '-password' ,(err, user) => {
                                if(user){
                                    response.status(200).send(user);
                                    connection.close();
                                    resolve();
                                }else{
                                    response.status(400).send({msg: 'User not found'});
                                    connection.close();
                                    resolve();
                                }
                            })
                        }else{
                            response.status(401).send({msg: 'Unauthorized'});
                            connection.close();
                            resolve();
                        }
                    })
                }else{
                    response.status(401).send({msg: 'You are not supposed to be here'});
                    connection.close();
                    resolve();
                }
            }
        });
    })
})