import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;

    const email = req.body.email;
    const password = req.body.password

    return new Promise(resolve => {
        apiHandler(res, method, {
            POST: async (response) => {

                // Find user di db
                const checkUser = await models.User.findOne({email});

                // Cek user ada apa enggak
                if(!checkUser){
                    response.status(400).json({auth: false, msg: 'Pengguna belum terdaftar'});
                    connection.close();
                }else{
                    // Mengecek password
                    const passwordIsValid = await bcrypt.compare(password, checkUser.password);

                    // HTTP Status Unauthorized jika password invalid
                    if (!passwordIsValid){
                        return response.status(401).send({ auth: false, token: null, msg: 'Email atau Password tidak cocok' })
                    }

                    // Membuat token
                    const token = jwt.sign({ id: checkUser._id }, process.env.SECRET, {
                        expiresIn: 86400
                    });

                    response.status(200).send({ auth: true, token: token});
                    connection.close();
                    resolve();
                }
            }
        });
    })
})