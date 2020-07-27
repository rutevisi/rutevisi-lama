import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;
    const { query: { id }} = req;

    const newTestHistory = {
        testname: req.body.testname,
        testresult: req.body.testresult
    }

    return new Promise(resolve => {
        apiHandler(res, method, {
            GET: async (response) => {

                // Find user di db
                const checkUser = await models.User.findById(id);

                // Ngecek apakah user udah ada apa belom
                if(checkUser){
                    connection.close();
                    response.status(200).json(checkUser);
                    resolve();
                }else{
                    connection.close();
                    response.status(400).json({auth: false, msg: 'Pengguna belum terdaftar'});
                }
            },
            POST: async (response) => {
                const newData = await models.User.findOneAndUpdate({ _id: id}, {
                    $push: {
                        testHistory: newTestHistory
                    }
                }, (err, data) => {
                    if(err){
                        connection.close();
                        response.status(400).json({msg: 'Ada kesalahan'});
                    }
                    connection.close();
                    response.status(200).json('Data berhasil dimasukkan!');
                    resolve();
                })
            }
        });
    })
})